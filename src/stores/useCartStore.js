import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    totalAmount: 0,
    setCart: product => set((state) => {
        const productInCartIndex = state.cart.findIndex(item => item.product.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(state.cart)
            newCart[productInCartIndex].quantity += 1

            return {
                cart: newCart
            }
        }

        return {
            cart: [...state.cart, { product, quantity: 1 }]
        }
    }),
    clearCart: () => set(state => ({ ...state, cart: [], totalAmount: 0 })),
    removeCart: product => set((state) => {
        const removedProducts = state.cart.filter(item => item.product.id !== product.id)
        const productInCartIndex = state.cart.findIndex(item => item.product.id === product.id)

        if (state.cart[productInCartIndex].quantity > 1) {
            const newCart = structuredClone(state.cart)
            newCart[productInCartIndex].quantity -= 1

            return {
                cart: newCart
            }
        }

        return {
            cart: removedProducts
        }
    })
}))

export { useCartStore }
