'use client'

import { createContext, useState } from 'react'

interface IProductContext {
  selectedProducts: Producto[]
  addProduct: (value: Producto) => void
  removeSelectedProduct: (value: Producto) => void
}

export const ProductContext = createContext<IProductContext | null>(null)

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [selectedProducts, setSelectedProducts] = useState<Producto[]>([])

  const addProduct = (product: Producto) => {
    setSelectedProducts(prev => [...prev, product])
  }

  const removeSelectedProduct = (value: Producto) => {
    setSelectedProducts(prev => prev.filter(product => product.id !== value.id))
  }

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, removeSelectedProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}
