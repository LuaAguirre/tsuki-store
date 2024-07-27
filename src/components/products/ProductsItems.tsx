import { useCartStore } from '@/stores/useCartStore'
import { ProductCarousel } from './ProductCarousel'
import { ToastAddCart } from './ToastAddCart'
import type { Product } from '@/types/product'

type ProductsItemProps = {
  product: Product
}

export function ProductsItems({ product }: ProductsItemProps) {
  const setCart = useCartStore((state) => state.setCart)
  const handleAddToCart = (product: Product) => {
    setCart(product)
  }
  return (
    <li
      key={product.id}
      className='flex flex-col gap-2 p-4 bg-[#e9eaea] dark:bg-[#181726] border  rounded-lg group items-center'>
      <ProductCarousel product={product} />

      <div className='grid grid-rows-3 w-full h-28 p-1'>
        <div className='flex items-center truncate'>
          <strong>{product.title}</strong>
        </div>

        <div className='flex items-center opacity-80 text-sm'>
          S/.{product.price}
        </div>

        <div className='flex items-center justify-end'>
          <ToastAddCart
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </li>
  )
}
