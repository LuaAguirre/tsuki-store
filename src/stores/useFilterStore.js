import { create } from "zustand"
import { products as initialProducts } from '@/mocks/products.json'
import { useStore } from "zustand"
import { useSearchStore } from "./useSearchStore"

const useFilterStore = create((set, get) => ({
    minPrice: 0,
    category: 'all',

    setMinPrice: (minPrice) => set(() => ({
        minPrice
    })),

    setCategory: (category) => set(() => ({
        category
    })),

    filterProducts: (products) => {
        const { minPrice, category } = get()
        return products?.filter((product) => {
            return (
                product.price >= minPrice &&
                (category === 'all' || category === product.category.name)
            )
        })
    },

    filteredProducts: () => {
        const search = useStore(useSearchStore, state => state.search)
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
