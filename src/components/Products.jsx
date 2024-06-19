import '../styles/Products.css'
import { IconAddCart } from './icons/IconAddCart'
//interface Products {
  //id: string
  //title: string
  //price: number
// images: string[]
//}

export function Products({products}) {
  return (
    <div className='
    w-full flex justify-center items-center
     m-0 py-16 px-48 gap-4
    '>
          <ul className='grid gap-4 w-full'>

      {products?.slice(0,16).map((product) => (

            <li key={product.id} className='flex flex-col gap-4
            rounded border p-4'>
              <img src={product.images} alt={`imagen de ${product.title}`} className='
              rounded w-full block object-cover'/>
              <div className='flex justify-center'>
              <strong className='text-md font-semibold'>{product.title}</strong> - ${product.price}
              </div>

              <div className='flex justify-center'>
                <button><IconAddCart/></button>
              </div>
            </li>

))}
          </ul>
    </div>
  )
}
