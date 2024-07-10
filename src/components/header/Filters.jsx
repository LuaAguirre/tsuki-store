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
    <section className='relative flex flex-col md:flex-row justify-evenly items-center md:items-stretch gap-4'>
      <div className='w-full md:w-auto'>
        <SelectCategory handleChangeCategory={handleChangeCategory} />
      </div>

      <div className='w-full md:w-auto'>
        <Search />
      </div>

      <div className='flex items-center gap-2 w-full md:w-auto'>
        <label htmlFor={minPriceFilterId}>Min. Price:</label>
        <input
          type='range'
          min='0'
          max='1000'
          step={50}
          id={minPriceFilterId}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>
  )
}
