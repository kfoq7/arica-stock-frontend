'use client'

import { Select } from '@/components/select'
import { PaymentCard } from '@/components/payment-card'
import { ProductSelected } from '@/components/product-selected'
import { useProducts } from '@/hooks/use-products'
import { useProductsList } from '@/hooks/use-products-list'

export default function NewSale() {
  const { data } = useProductsList()
  const { selectedProducts, addSelectedProducts } = useProducts()

  return (
    <div className="flex w-full gap-x-4 space-y-4">
      <div className="spy flex w-3/4 flex-col gap-4 space-y-2">
        <h1 className="text-5xl font-semibold tracking-tighter">
          Punto de Venta
        </h1>

        <div className="space-y-1">
          <span className="text-lg font-semibold">Producto</span>
          <Select
            options={
              data &&
              data.data.map(product => {
                const { id, nombre, precio } = product

                return {
                  label: `${id} - ${nombre} - S/.${precio}`,
                  value: product
                }
              })
            }
            value={selectedProducts.map(({ producto }) => ({
              label: producto.nombre,
              value: producto
            }))}
            onChange={e => {
              const values = (e as { value: Producto; label: string }[]).map(
                option => option.value
              )
              addSelectedProducts(values)
            }}
            placeholder="Busca un producto por código o nombre"
            isMulti
            controlShouldRenderValue={false}
          />
        </div>

        <ProductSelected />
      </div>
      <PaymentCard />
    </div>
  )
}
