import { Products } from './Products'
import { Filters } from './header/Filters'
import { useSearchStore } from '@/stores/useSearchStore'
import { products as initialProducts } from '@/mocks/products.json'
import { useState } from 'react'

export function App() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const search = useSearchStore((state) => state.search)

  const filterProducts = (products) => {
    return products?.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' ||
          filters.category === product.category.name)
      )
    })
  }

  const filteredProducts = filterProducts(initialProducts).filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
  })
  return (
    <>
      <Filters
        filters={filters}
        setFilters={setFilters}
      />
      <Products filteredProducts={filteredProducts} />
    </>
  )
}
