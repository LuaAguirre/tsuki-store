import { useId } from 'react'
import Search from './Search'

export function Filters({ filters, setFilters }) {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <section className='flex flex-row justify-evenly'>
      <div className='flex gap-4'>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          className='size-full bg-transparent'>
          <option value='all'>All</option>
          <option value='Clothess'>Clothes</option>
          <option value='Electronics'>Electronics</option>
          <option value='Furniture'>Furniture</option>
          <option value='Shoes'>Shoes</option>
          <option value='Miscellaneous'>Miscellaneous</option>
        </select>
      </div>

      <Search />

      <div className='flex gap-4'>
        <label htmlFor={minPriceFilterId}>Price:</label>
        <input
          type='range'
          min='0'
          max='1000'
          id={minPriceFilterId}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>
  )
}
