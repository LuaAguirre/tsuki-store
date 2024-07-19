export default function IconCart({ count }: { count: number }) {
  return (
    <div className='relative'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='#2c3e50'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path
          stroke='none'
          d='M0 0h24v24H0z'
          fill='none'></path>
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
        <path d='M17 17h-11v-14h-2'></path>
        <path d='M6 5l14 1l-1 7h-13'></path>
      </svg>
      {count > 0 && (
        <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full size-4 flex justify-center items-center text-xs'>
          {count}
        </span>
      )}
    </div>
  )
}
