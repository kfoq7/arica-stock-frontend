import { useContext } from 'react'
import { ProductContext } from '@/context/products'

export function useProducts() {
  const context = useContext(ProductContext)

  if (context == null) {
    throw new Error('useProducts must be used within a ProductProvider')
  }

  return context
}
