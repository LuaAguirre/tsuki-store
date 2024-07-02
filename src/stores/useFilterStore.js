import { create } from "zustand"

const useFilterStore = create((set) => ({
    minPrice: 0,
    category: 'all',
    setMinPrice: () => set((state) => {
        const filteredMinPrice = state?.filter(item => {
            item.price >= state.minPrice
        })

        return {
            minPrice: filteredMinPrice
        }
    }),
    setCategory: () => set((state) => {
        const filteredCategory = state?.filter(item => {
            item.category.name === state.category || state.category === 'all'
        })

        return {
            category: filteredCategory
        }
    }),
}))

export { useFilterStore }