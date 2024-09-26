export interface Product {
  id: string
  title: string
  price: number
  images: string[]
  description?: string
  category?: string
  label?: string
  url?: string
}

export interface FilterStore {
  maxPrice: number
  category: string
  label: string
  initialProducts: []
  setMaxPrice: (maxPrice: number) => void
  setCategory: (category: string) => void
  setLabel: (label: string) => void
  filterProducts: (products: Product[]) => Product[]
  filteredProducts: () => Product[]
  resetFilters: () => void
  fetchProducts: () => void
}
