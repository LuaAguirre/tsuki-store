import { create } from "zustand";

const useStore = create((set) => ({
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
    clearCart: () => set(state => ({ ...state, cart: [], totalAmount: 0 }))
}))

export { useStore }

//manera basica de agregar un producto al carrito
//setCart: product => set((state) => ({ cart: [...state.cart, product] })),