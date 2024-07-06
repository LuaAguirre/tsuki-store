import { create } from "zustand"

const useCartStore = create((set) => ({
    cart: [],
    totalAmount: 0,
    setCart: product => set((state) => {
        const productInCartIndex = state.cart.findIndex(item => item.product.id === product.id)

        let newCart
        if (productInCartIndex >= 0) {
            newCart = structuredClone(state.cart)
            newCart[productInCartIndex].quantity += 1
        } else {
            newCart = [...state.cart, { product, quantity: 1 }]
        }

        const newTotalAmount = newCart.reduce((total, item) => total + item.product.price * item.quantity, 0)

        return {
            cart: newCart,
            totalAmount: newTotalAmount
        }
    }),
    clearCart: () => set(() => ({ cart: [], totalAmount: 0 })),
    removeCart: product => set((state) => {
        const productInCartIndex = state.cart.findIndex(item => item.product.id === product.id)

        let newCart
        if (state.cart[productInCartIndex].quantity > 1) {
            newCart = structuredClone(state.cart)
            newCart[productInCartIndex].quantity -= 1
        } else {
            newCart = state.cart.filter(item => item.product.id !== product.id)
        }

        const newTotalAmount = newCart.reduce((total, item) => total + item.product.price * item.quantity, 0)

        return {
            cart: newCart,
            totalAmount: newTotalAmount
        }
    })
}))

export { useCartStore }
