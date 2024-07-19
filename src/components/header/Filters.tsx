import { useId, type ChangeEvent } from 'react'
import { useFilterStore } from '../../stores/useFilterStore'
import Search from './Search'
import { SelectCategory } from './SelectCategory'

export function Filters() {
  const minPriceFilterId = useId()
  const minPrice = useFilterStore((state) => state.minPrice)
  const setMinPrice = useFilterStore((state) => state.setMinPrice)
  const setCategory = useFilterStore((state) => state.setCategory)

  const handleChangeCategory = (category: string) => {
    setCategory(category)
  }
  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value)
  }

  return (
    <section className='grid grid-cols-2 md:flex-row md:flex justify-evenly items-center md:items-stretch gap-4 gap-y-6'>
      <div className='w-full flex justify-center'>
        <SelectCategory handleChangeCategory={handleChangeCategory} />
      </div>

      <div className='flex justify-center items-center gap-2 w-full p-2 '>
        <label
          htmlFor={minPriceFilterId}
          className='text-sm whitespace-nowrap'>
          Min. Price:
        </label>
        <input
          type='range'
          min='0'
          max='1000'
          step={50}
          id={minPriceFilterId}
          value={minPrice}
          onChange={handleChangeMinPrice}
          className='w-full max-w-28 flex-1'
        />
        <span>${minPrice}</span>
      </div>

      <div className='w-full col-span-2 flex justify-center'>
        <Search />
      </div>
    </section>
  )
}
