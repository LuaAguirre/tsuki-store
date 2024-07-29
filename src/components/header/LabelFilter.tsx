import { useFilterStore } from '@/stores/useFilterStore'

const LabelFilter: React.FC = () => {
  const setLabel = useFilterStore((state) => state.setLabel)

  const handleLabelChange = (label: string) => {
    setLabel(label)
  }

  return (
    <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2 lg:gap-4'>
      <button
        className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg px-4 py-1'
        onClick={() => handleLabelChange('New')}
        aria-label='Filter by new items'>
        Nuevos
      </button>

      <button
        className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg px-4 py-1'
        onClick={() => handleLabelChange('Discount')}
        aria-label='Filter by discounted items'>
        Ofertas
      </button>

      <button
        className='flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg px-4 py-1'
        onClick={() => handleLabelChange('Top')}
        aria-label='Filter by popular items'>
        Populares
      </button>
    </div>
  )
}

export default LabelFilter
