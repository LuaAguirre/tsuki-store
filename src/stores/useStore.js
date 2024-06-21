import { create } from "zustand";

const useStore = create((set) => ({
    cart: [],
    totalAmount: 0,
    setCart: product => set((state) => ({ cart: [...state.cart, product] })),
    clearCart: () => set(state => ({ ...state, cart: [], totalAmount: 0 }))
}))

export { useStore }