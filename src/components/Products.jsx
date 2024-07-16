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
      <ul className='grid gap-8 w-full'>
        {filteredProducts?.slice(0, 16).map((product) => (
          <li
            key={product.id}
            className='flex flex-col gap-4 p-4 bg-[#F6F6F6] rounded-lg border'>
            <img
              src={product.images}
              alt={`imagen de ${product.title}`}
              className='rounded-md w-full block object-cover'
            />
            <div className='grid grid-rows-3 w-full h-32'>
              <div className='flex items-center'>
                <strong>{product.title}</strong>
              </div>

              <div className='flex items-center opacity-80 text-sm'>
                ${product.price}
              </div>

              <div className='flex items-center justify-end mt-2'>
                <ToastAddCart
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
