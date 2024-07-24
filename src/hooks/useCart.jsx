import { useCartStore } from '@/stores/useCartStore'
import { useFilterStore } from '@/stores/useFilterStore'

export function useCart() {
  const setCart = useCartStore((state) => state.setCart)
  const filteredProducts = useFilterStore((state) => state.filteredProducts)

  return { setCart, filteredProducts }
}
