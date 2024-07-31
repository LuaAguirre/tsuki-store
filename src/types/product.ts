export interface Product {
  id: string
  title: string
  price: number
  images: string[]
  description?: string
  category?: string
  label?: string
}

export interface FilterStore {
  maxPrice: number
  category: string
  label: string
  setMaxPrice: (maxPrice: number) => void
  setCategory: (category: string) => void
  setLabel: (label: string) => void
  filterProducts: (products: Product[]) => Product[]
  filteredProducts: () => Product[]
  resetFilters: () => void
}
