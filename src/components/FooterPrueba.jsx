import '../styles/FooterPrueba.css'

export function FooterPrueba({ filters }) {
  return <footer id='footer-filters'>{JSON.stringify(filters, null, 2)}</footer>
}
