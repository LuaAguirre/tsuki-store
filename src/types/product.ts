export interface Product {
  id: number
  title: string
  price: number
  images: string[]
  description?: string
  category?: {
    name: string
  }
}

export interface FilterStore {
  maxPrice: number
  category: string
  setMaxPrice: (maxPrice: number) => void
  setCategory: (category: string) => void
  filterProducts: (products: Product[]) => Product[]
  filteredProducts: () => Product[]
}
