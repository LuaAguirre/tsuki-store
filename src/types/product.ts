export interface Product {
  id: number
  title: string
  price: number
  images: string | string[]
  description?: string
  category?: {
    name: string
  }
}

export interface FilterStore {
  minPrice: number
  category: string
  setMinPrice: (minPrice: number) => void
  setCategory: (category: string) => void
  filterProducts: (products: Product[]) => Product[]
  filteredProducts: () => Product[]
}
