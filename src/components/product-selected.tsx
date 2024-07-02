'use client'

import { useProducts } from '@/hooks/use-products'

export function ProductSelected() {
  const { selectedProducts, updateProductQuantity, removeSelectedProduct } =
    useProducts()

  return (
    <div className="w-full overflow-y-auto">
      {selectedProducts.length === 0 ? (
        <div className="p-4 text-center">
          <p>No items selected</p>
        </div>
      ) : (
        <table className="min-w-full bg-white text-left">
          <thead>
            <tr>
              <th className="border-b-2 border-blue-400/40 px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Nombre</th>
              <th className="border-b px-4 py-2">Categoría</th>
              <th className="border-b px-4 py-2">Cantidad</th>
              <th className="border-b px-4 py-2">Precio</th>
              <th className="border-b px-4 py-2">Total</th>
              <th className="border-b px-4 py-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map(({ cantidad, precio, producto }) => (
              <tr key={producto.id}>
                <td className="border-b px-4 py-2">{producto.id}</td>
                <td className="w-80 border-b px-4 py-2">{producto.nombre}</td>
                <td className="border-b px-4 py-2">
                  {producto.categoria.nombre}
                </td>
                <td className="border-b px-4 py-2">{cantidad}</td>
                <td className="border-b px-4 py-2">S/.{producto.precio}</td>
                <td className="border-b px-4 py-2">S/.{precio}</td>
                <td className="border-b px-4 py-2">
                  <div className="flex items-center justify-between gap-x-1">
                    <div className="flex items-center gap-x-2">
                      <button
                        className="rounded border border-gray-700/20 px-2 text-lg font-semibold text-gray-700/60 hover:bg-gray-600/10"
                        onClick={() =>
                          updateProductQuantity(producto.id, cantidad + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="rounded border border-gray-700/20 px-2 text-lg font-semibold text-gray-700/60 hover:bg-gray-600/10"
                        onClick={() =>
                          updateProductQuantity(producto.id, cantidad - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                    <button
                      className="rounded px-2 py-1"
                      onClick={() => removeSelectedProduct(producto)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
