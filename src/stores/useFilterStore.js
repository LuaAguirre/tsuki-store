import { create } from "zustand"
import { products as initialProducts } from '@/mocks/products.json'

const useFilterStore = create((set) => ({
    filters: { minPrice: 0, category: 'all' },
    setFilters: () => set((state) => {
        const filterProducts = (products) => products?.filter(product => {
            product.price >= state.filters.minPrice &&
                (state.filters.category === product.category.name
                    || state.filters.category === 'all')
        })

        const filteredProducts = filterProducts(initialProducts)

        return {
            filters: filteredProducts
        }
    })
}))

export { useFilterStore }