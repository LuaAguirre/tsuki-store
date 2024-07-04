import { create } from "zustand"
import { products as initialProducts } from '@/mocks/products.json'

const useFilterStore = create((set, get) => ({
    filters: { minPrice: 0, category: 'all' },

    setFilters: (newFilters) => set((state) => ({
        filters: {
            ...state.filters,
            ...newFilters
        }
    })),

    filterProducts: (products) => {
        const { filters } = get()
        return products?.filter((product) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' || filters.category === product.category.name)
            )
        })
    },

    filteredProducts: (search) => {
        const { filterProducts } = get()
        return filterProducts(initialProducts).filter((product) => {
            return (
                product.title.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
            )
        })
    }
}))

export { useFilterStore }