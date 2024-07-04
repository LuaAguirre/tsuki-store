import { Products } from './Products'
import { Filters } from './header/Filters'
import { FooterPrueba } from './FooterPrueba'
import { useSearchStore } from '@/stores/useSearchStore'
import { useFilterStore } from '@/stores/useFilterStore'

export function App() {
  const filteredProducts = useFilterStore((state) => state.filteredProducts)
  const search = useSearchStore((state) => state.search)

  const productsToShow = filteredProducts(search)

  return (
    <>
      <Filters />
      <Products products={productsToShow} />
    </>
  )
}
