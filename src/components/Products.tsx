import '../styles/Products.css'
import { useCartStore } from '../stores/useCartStore'
import { useFilterStore } from '@/stores/useFilterStore'
import { ToastAddCart } from './buttons/ToastAddCart'
import { ProductCarousel } from './products/ProductCarousel'
import { type Product } from '@/types/product'

export function Products() {
  const setCart = useCartStore((state) => state.setCart)
  const filteredProducts = useFilterStore((state) => state.filteredProducts())

  const handleAddToCart = (product: Product) => {
    setCart(product)
  }

  if (!filteredProducts.length) {
    return <div className='flex justify-center'>No products found</div>
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <ul className='grid gap-8 w-full '>
        {filteredProducts?.slice(0, 16).map((product: Product) => (
          <li
            key={product.id}
            className='flex flex-col gap-2 p-4 bg-[#F6F6F6] rounded-lg group items-center border'>
            <ProductCarousel product={product} />

            <div className='grid grid-rows-3 w-full h-28 p-1'>
              <div className='flex items-center truncate'>
                <strong>{product.title}</strong>
              </div>

              <div className='flex items-center opacity-80 text-sm'>
                ${product.price}
              </div>

              <div className='flex items-center justify-end'>
                <ToastAddCart
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
                <button
                  className='snipcart-add-item'
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-description={product.description}
                  data-item-image={product.images[0]}
                  data-item-name={product.title}
                  data-item-custom1-name='Frame color'
                  data-item-custom1-options='Black|Brown|Gold'>
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
