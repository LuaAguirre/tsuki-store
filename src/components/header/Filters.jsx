import { useId } from 'react'

export function Filters ({filters, setFilters}) { 
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }


  console.log(filters)

  return (
    <section>

      <div>

      <label className='rounded-lg border border-zinc-300 bg-[#f6f6f6] px-3' htmlFor={categoryFilterId}>
        Category
      </label>
        <select id={categoryFilterId} onChange={handleChangeCategory} className='size-full bg-transparent' >
      <option value="Clothess">Clothes</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
      <option value="Shoes">Shoes</option>
      <option value="Miscellaneous">Miscellaneous</option>
        </select>

      </div>

      <div>

      <label htmlFor={minPriceFilterId}>
        Precio:
      </label>
        <input type="range" min='0' max='1000' id={minPriceFilterId} value={filters.minPrice} onChange={handleChangeMinPrice} />
      <span>${filters.minPrice}</span>

      </div>
    </section>
  )
}

