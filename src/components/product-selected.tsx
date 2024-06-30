'use client'

import { useProductsList } from '@/hooks/use-products-list'

export function ProductSelected() {
  const { data } = useProductsList()

  const productos = data?.data

  return (
    <div className="w-full overflow-y-auto">
      <table className="min-w-full bg-white text-left">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">ID</th>
            <th className="border-b px-4 py-2">Nombre</th>
            <th className="border-b px-4 py-2">Precio</th>
            <th className="border-b px-4 py-2">Stock</th>
            <th className="border-b px-4 py-2">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map(producto => (
              <tr key={producto.id}>
                <td className="border-b px-4 py-2">{producto.id}</td>
                <td className="border-b px-4 py-2">{producto.nombre}</td>
                <td className="border-b px-4 py-2">{producto.precio}</td>
                <td className="border-b px-4 py-2">{producto.stock}</td>
                <td className="border-b px-4 py-2">
                  {producto.categoria.nombre}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
