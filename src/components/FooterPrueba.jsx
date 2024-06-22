import '../styles/FooterPrueba.css'
import { useCartStore } from '../stores/useCartStore'

export function FooterPrueba({ filters }) {
  const cart = useCartStore(state => state.cart)
  return (
  <footer id='footer-filters'>
    {JSON.stringify(filters, null, 2)}
    {JSON.stringify(cart, null, 2)}
  </footer>
   )
}
