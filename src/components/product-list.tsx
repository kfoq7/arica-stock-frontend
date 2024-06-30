'use client'

import { useProductsList } from '@/hooks/use-products-list'

export function ProductList() {
  const { data, isLoading, error } = useProductsList()

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data?.data)

  return (
    <div className="max-h-[700px] overflow-y-auto">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map(({ id, nombre, precio }) => (
          <div key={id} className="w-full rounded-lg bg-white">
            <div className="flex flex-col items-center">
              {nombre}

              {precio}

              {/* <div className="flex items-center justify-between"></div> */}
              <button className="w-[70%] rounded-md bg-green-400/80 px-3 py-2">
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
