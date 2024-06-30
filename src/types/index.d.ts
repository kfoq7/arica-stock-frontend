interface Categoria {
  id: number
  nombre: string
  descripcion: string
  estaActivo: boolean
}

interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
  categoria: Categoria
}

interface DetalleVenta {
  id: number
  cantidad: number
  precio: string // Changed to string to match the provided JSON
  producto: Producto
}

interface Venta {
  id: number
  fecha: string // Use string to represent ISO date strings
  total: string // Changed to string to match the provided JSON
  detalleVenta: DetalleVenta[]
}

type ApiResponse<T = any> = {
  readonly data: T
}
