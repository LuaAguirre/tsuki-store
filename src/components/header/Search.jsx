import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState()

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input
        type='text'
        placeholder='Furnitures, clothes, etc...'
      />
      <Button
        onClick={handleSearch}
        type='submit'>
        Search
      </Button>
    </div>
  )
}
