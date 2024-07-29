import { create } from 'zustand'
import { products as initialProducts } from '@/mocks/realProducts.json'
import { useStore } from 'zustand'
import { useSearchStore } from './useSearchStore'
import type { Product, FilterStore } from '@/types/product'

const useFilterStore = create<FilterStore>((set, get) => ({
  maxPrice: 200,
  category: 'all',
  label: 'all',

  setMaxPrice: (maxPrice) =>
    set(() => ({
      maxPrice
    })),

  setCategory: (category) =>
    set(() => ({
      category
    })),

  setLabel: (label) =>
    set(() => ({
      label
    })),

  resetFilters: () =>
    set(() => ({
      maxPrice: 200,
      category: 'all',
      label: 'all'
    })),

  filterProducts: (products) => {
    const { maxPrice, category, label } = get()
    return products?.filter((product) => {
      const matchesPrice = product.price <= maxPrice
      const matchesCategory =
        category === 'all' || category === product.category
      const matchesLabel = label === 'all' || product.label === label
      return matchesPrice && matchesCategory && matchesLabel
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
