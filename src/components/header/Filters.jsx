import { useId } from 'react'
import Search from './Search'
import { SelectCategory } from './SelectCategory'

export function Filters({ filters, setFilters }) {
  const minPriceFilterId = useId()

  const handleChangeCategory = (category) => {
    setFilters((prevState) => ({
      ...prevState,
      category
    }))
  }
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <section className='flex justify-evenly'>
      <SelectCategory handleChangeCategory={handleChangeCategory} />

      <Search />

      <div className='flex items-center gap-2'>
        <label htmlFor={minPriceFilterId}>Min. Price:</label>
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
