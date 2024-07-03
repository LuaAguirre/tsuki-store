import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Search({ search, setSearch }) {
  const handleChange = (event) => {
    const value = event.target.value
    setSearch(value) // Actualizar el término de búsqueda en el estado principal
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Furnitures, clothes, etc...'
          value={search}
          onChange={handleChange}
        />
        <Button type='submit'>Search</Button>
      </form>
    </div>
  )
}
