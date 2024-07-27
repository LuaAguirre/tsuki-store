import { create } from 'zustand'
import { products as initialProducts } from '@/mocks/realProducts.json'
import { useStore } from 'zustand'
import { useSearchStore } from './useSearchStore'
import type { Product, FilterStore } from '@/types/product'

const useFilterStore = create<FilterStore>((set, get) => ({
  maxPrice: 200,
  category: 'all',

  setMaxPrice: (maxPrice) =>
    set(() => ({
      maxPrice
    })),

  setCategory: (category) =>
    set(() => ({
      category
    })),

  filterProducts: (products) => {
    const { maxPrice, category } = get()
    return products?.filter((product) => {
      return (
        product.price <= maxPrice &&
        (category === 'all' || category === product.category?.name)
      )
    })
  },

  filteredProducts: () => {
    const search = useStore(useSearchStore, (state) => state.search)
    const { filterProducts } = get()
    return filterProducts(initialProducts as Product[]).filter((product) => {
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase())
      )
    })
  }
}))

export { useFilterStore }
