import { useFilterStore } from '@/stores/useFilterStore'

const Home: React.FC = () => {
  const resetFilters = useFilterStore((state) => state.resetFilters)

  return (
    <h1
      className='text-5xl font-bold text-white/75 cursor-pointer'
      onClick={() => resetFilters()}
      aria-label='Reset all filters'>
      tsuki.
    </h1>
  )
}

export default Home
