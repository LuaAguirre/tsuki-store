import '../styles/FooterPrueba.css'
import { useStore } from '../stores/useStore'

export function FooterPrueba({ filters }) {
  const cart = useStore(state => state.cart)
  return (
  <footer id='footer-filters'>
    {JSON.stringify(filters, null, 2)}
    {JSON.stringify(cart, null, 2)}
  </footer>
   )
}
