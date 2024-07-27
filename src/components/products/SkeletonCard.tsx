import { Skeleton } from '../ui/skeleton'

export function SkeletonCard() {
  return (
    <li className='flex flex-col gap-2 p-4 bg-[#e9eaea] dark:bg-[#181726] border rounded-lg group items-center'>
      <div className='rounded-md p-1 h-96 overflow-hidden'>
        <Skeleton className='h-full w-full rounded-md' />
      </div>
      <div className='grid grid-rows-3 w-full h-28 p-1'>
        <div className='flex items-center truncate'>
          <Skeleton className='h-4 w-[80%]' />
        </div>
        <div className='flex items-center opacity-80 text-sm'>
          <Skeleton className='h-4 w-[50%]' />
        </div>
        <div className='flex items-center justify-end'>
          <Skeleton className='h-6 w-20' />
        </div>
      </div>
    </li>
  )
}
