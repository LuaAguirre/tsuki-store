import '../styles/FooterPrueba.css'
import { useCartStore } from '../stores/useCartStore'
import { useFilterStore } from '@/stores/useFilterStore'

export function FooterPrueba() {
  const cart = useCartStore((state) => state.cart)
  const filters = useFilterStore((state) => state.filters)

  return (
    <footer id='footer-filters'>
      {JSON.stringify(filters, null, 2)}
      {JSON.stringify(cart, null, 2)}
    </footer>
  )
}
