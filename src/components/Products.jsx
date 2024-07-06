import '../styles/Products.css'
import { useCartStore } from '../stores/useCartStore'
import { ToastAddCart } from './buttons/ToastAddCart'

export function Products({ filteredProducts }) {
  const setCart = useCartStore((state) => state.setCart)

  const handleAddToCart = (product) => {
    setCart(product)
  }

  return (
    <div
      className='
    w-full flex justify-center items-center m-0 py-16 px-4 md:px-16 lg:px-48
    '>
      <ul className='grid gap-4 w-full'>
        {filteredProducts?.slice(0, 16).map((product) => (
          <li
            key={product.id}
            className='flex flex-col gap-4
            rounded border p-4'>
            <img
              src={product.images}
              alt={`imagen de ${product.title}`}
              className='
              rounded w-full block object-cover'
            />
            <div className='flex justify-center gap-2'>
              <strong className='text-md font-semibold'>{product.title}</strong>
              - ${product.price}
            </div>

            <div className='flex justify-center'>
              <ToastAddCart
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
