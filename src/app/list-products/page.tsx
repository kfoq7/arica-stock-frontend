'use client'

import { useState } from 'react'
import { Select } from '@/components/select'
import { useCategoriesList } from '@/hooks/use-categories-list'
import { useProductsList } from '@/hooks/use-products-list'

type OptionType = { value: number; label: string }

export default function ListProducts() {
  const { data: categories, isLoading: categoriesLoading } = useCategoriesList()
  const { data: products, isLoading, error } = useProductsList()
  const [selectedCategories, setSelectedCategories] = useState<OptionType[]>([])

  const handleCategoryChange = (selectedOptions: OptionType[]) => {
    setSelectedCategories(selectedOptions || [])
  }

  const filterProductsByCategory = (
    products: Producto[],
    selectedCategories: OptionType[]
  ) => {
    if (selectedCategories.length === 0) {
      return products
    }

    return products.filter(product =>
      selectedCategories.some(
        category => category.value === product.categoria.id
      )
    )
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading products</div>
  }

  const filteredProducts = filterProductsByCategory(
    products?.data || [],
    selectedCategories
  )

  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold">Lista de Productos</h1>

      <Select
        className="mb-4"
        options={categories?.data.map(({ id, nombre }) => ({
          value: id,
          label: nombre
        }))}
        isMulti
        placeholder="Select a category..."
        isLoading={categoriesLoading}
        onChange={handleCategoryChange}
      />

      <div className="h-[700px] overflow-y-auto p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            filteredProducts?.map(product => (
              <div
                key={product.id}
                className="rounded-md bg-white p-4 shadow-md"
              >
                <h3 className="text-lg font-semibold">{product.nombre}</h3>
                <p className="text-gray-500">{product.categoria.nombre}</p>
                <p className="mt-2 text-gray-700">
                  Price: S/. {product.precio}
                </p>
                <p className="mt-2 text-gray-700">Stock: {product.stock}</p>
                <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Editar
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
