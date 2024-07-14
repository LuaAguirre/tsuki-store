import '../styles/Products.css'
import { useCartStore } from '../stores/useCartStore'
import { ToastAddCart } from './buttons/ToastAddCart'
import { useFilterStore } from '@/stores/useFilterStore'

export function Products() {
  const setCart = useCartStore((state) => state.setCart)
  const filteredProducts = useFilterStore((state) => state.filteredProducts(''))

  const handleAddToCart = (product) => {
    setCart(product)
  }

  if (!filteredProducts.length) {
    return <div className='flex justify-center'>No products found</div>
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <ul className='grid gap-4 w-full'>
        {filteredProducts?.slice(0, 16).map((product) => (
          <li
            key={product.id}
            className='flex flex-col gap-4 rounded border p-4'>
            <img
              src={product.images}
              alt={`imagen de ${product.title}`}
              className='rounded w-full block object-cover'
            />
            <div className='flex justify-center items-center gap-2  '>
              <strong className='text-center font-semibold text-md'>
                {product.title}
              </strong>
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
