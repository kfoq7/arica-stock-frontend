'use client'

import { createContext, useState } from 'react'
import { calculatePrice, getCurrentDate } from '@/lib/utils'

interface IProductContext {
  selectedProducts: Omit<DetalleVenta, 'id'>[]
  addSelectedProducts: (value: Producto[]) => void
  removeSelectedProduct: (value: Producto) => void
  updateProductQuantity: (productId: number, quantity: number) => void
  venta: CreateVenta
  setVenta: React.Dispatch<React.SetStateAction<CreateVenta>>
}

export const ProductContext = createContext<IProductContext | null>(null)

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [selectedProducts, setSelectedProducts] = useState<
    Omit<DetalleVenta, 'id'>[]
  >([])
  const [venta, setVenta] = useState<CreateVenta>({
    fecha: getCurrentDate(),
    detalleVenta: [],
    total: 0
  })

  const calculateTotalPrice = (detalle: Omit<DetalleVenta, 'id'>[]): number => {
    let totalPrice = 0

    detalle.forEach(({ cantidad, producto }) => {
      totalPrice += cantidad * producto.precio
    })
    return totalPrice
  }

  const addSelectedProducts = (products: Producto[]) => {
    setSelectedProducts(prevVenta => {
      const newProducts = products.map(product => ({
        cantidad: 1,
        precio: product.precio,
        producto: product
      }))

      const updatedDetalleVenta = [
        ...venta.detalleVenta,
        ...newProducts
          .filter(np => !prevVenta.some(p => p.producto.id === np.producto.id))
          .map(({ cantidad, precio, producto }) => ({
            cantidad,
            precio,
            producto
          }))
      ]

      const updatedTotal = calculateTotalPrice([
        ...selectedProducts,
        ...newProducts.filter(
          np => !prevVenta.some(p => p.producto.id === np.producto.id)
        )
      ])

      setVenta(prev => ({
        ...prev,
        detalleVenta: updatedDetalleVenta,
        total: updatedTotal
      }))

      return [
        ...prevVenta,
        ...newProducts.filter(
          np => !prevVenta.some(p => p.producto.id === np.producto.id)
        )
      ]
    })
  }

  const updateProductQuantity = (productId: number, quantity: number) => {
    setSelectedProducts(prevProducts => {
      const updatedProducts = prevProducts.map(p =>
        p.producto.id === productId
          ? {
              ...p,
              cantidad: quantity,
              precio: Number((quantity * p.producto.precio).toFixed(2))
            }
          : p
      )

      setVenta(prev => ({
        ...prev,
        detalleVenta: updatedProducts.map(({ cantidad, precio, producto }) => ({
          cantidad,
          precio,
          producto
        })),
        total: calculateTotalPrice(updatedProducts)
      }))

      return updatedProducts
    })
  }

  const removeSelectedProduct = (product: Producto) => {
    setSelectedProducts(prev => prev.filter(p => p.producto.id !== product.id))
    const updatedVenta: CreateVenta = {
      ...venta,
      total: calculateTotalPrice(selectedProducts)
    }
    setVenta(updatedVenta)
  }

  return (
    <ProductContext.Provider
      value={{
        selectedProducts,
        addSelectedProducts,
        removeSelectedProduct,
        updateProductQuantity,
        venta,
        setVenta
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
