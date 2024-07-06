export default function IconCart({ count }) {
  return (
    <div>
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
        <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center'>
          {count}
        </span>
      )}
    </div>
  )
}
