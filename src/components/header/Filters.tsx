import { useId, type ChangeEvent } from 'react'
import { useFilterStore } from '../../stores/useFilterStore'
import Search from './Search'
import { SelectCategory } from './SelectCategory'

export function Filters() {
  const maxPriceFilterId = useId()
  const maxPrice = useFilterStore((state) => state.maxPrice)
  const setMaxPrice = useFilterStore((state) => state.setMaxPrice)

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value))
  }

  return (
    <section className='grid grid-cols-2 md:flex-row md:flex justify-evenly items-center md:items-stretch gap-4 gap-y-6'>
      <div className='w-full flex justify-center'>
        <SelectCategory />
      </div>

      <div className='flex justify-center items-center gap-2 w-full p-2 '>
        <label
          htmlFor={maxPriceFilterId}
          className='text-sm whitespace-nowrap'>
          Máximo:
        </label>
        <input
          type='range'
          min='10'
          max='200'
          step={5}
          id={maxPriceFilterId}
          value={maxPrice}
          onChange={handleChangeMinPrice}
          className='w-full max-w-28 flex-1'
        />
        <span>S/.{maxPrice}</span>
      </div>

      <div className='w-full col-span-2 flex justify-center'>
        <Search />
      </div>
    </section>
  )
}
