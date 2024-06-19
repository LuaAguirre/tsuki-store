import '../styles/FooterPrueba.css'

export function FooterPrueba({ filters }) {
  return <footer>{JSON.stringify(filters, null, 2)}</footer>
}
