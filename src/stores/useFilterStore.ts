import { create } from 'zustand'
import { useSearchStore } from './useSearchStore'
import type { FilterStore } from '@/types/product'

const useFilterStore = create<FilterStore>((set, get) => ({
  maxPrice: 200,
  category: 'all',
  label: 'all',
  initialProducts: [],

  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setCategory: (category) => set({ category }),
  setLabel: (label) => set({ label }),

  resetFilters: () => {
    const resetSearch = useSearchStore.getState().resetSearch
    resetSearch()
    set({ maxPrice: 200, category: 'all', label: 'all' })
  },

  fetchProducts: async () => {
    const res = await fetch('/products.json')
    const data = await res.json()
    set({ initialProducts: data })
  },

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
    const search = useSearchStore.getState().search
    const { initialProducts } = get()
    const { filterProducts } = get()
    return filterProducts(initialProducts).filter((product) => {
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase())
      )
    })
  }
}))

export { useFilterStore }
