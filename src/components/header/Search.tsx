import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearchStore } from '@/stores/useSearchStore'
import type { ChangeEvent, FormEvent } from 'react'

export default function Search() {
  const search = useSearchStore((state) => state.search)
  const setSearch = useSearchStore((state) => state.setSearch)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className='flex w-full max-w-sm'>
      <form
        onSubmit={handleSubmit}
        className='flex gap-4 w-full max-w-sm'>
        <Input
          placeholder='Dragon ball, Jujutsu Kaisen...'
          value={search}
          onChange={handleChange}
        />
        <Button type='submit'>Buscar</Button>
      </form>
    </div>
  )
}
