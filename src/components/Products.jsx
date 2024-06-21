import '../styles/Products.css'
import { IconAddCart } from './icons/IconAddCart'
import { useStore } from '../stores/useStore'
import { useEffect } from 'react'

//interface Products {
  //id: string
  //title: string
  //price: number
// images: string[]
//}

export function Products({products}) {
  const setCart = useStore(state => state.setCart)
  const cart = useStore(state => state.cart)

  useEffect(() => {
    console.log('Cart:', cart);
  }, [cart]);

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
                <button onClick={() => setCart(product)} className='hover:scale-110'><IconAddCart/></button>
              </div>
            </li>

))}
          </ul>
    </div>
  )
}
