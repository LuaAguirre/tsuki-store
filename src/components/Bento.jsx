import { Products } from './Products'
import { useState } from 'react'
import products from '../mocks/products.json'

export function Bento () {
  const [ filters, setFilters ] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    
<main>
  <Products products={filteredProducts}/>
</main>

  )
}
