import '../../styles/Cart.css'
import IconCart from '../icons/IconCart'
import IconCartRemove from '../icons/IconCartRemove'
import { useCartStore } from '../../stores/useCartStore'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const removeCart = useCartStore((state) => state.removeCart)

  const handleAddToCart = (product) => {
    setCart(product)
  }
  const handleRemoveToCart = (product) => {
    removeCart(product)
  }

  return (
    <div>
      <label
        className='cart-button
  items-center flex justify-center p-1 absolute right-16 top-5 z-20 cursor-pointer hover:scale-150'
        for='cart-button'>
        <IconCart />
      </label>
      <input
        id='cart-button'
        type='checkbox'
        hidden
      />

      <aside
        className='cart
   bg-white/90 fixed right-0 top-0 w-1/5 p-8 pt-20 z-10 hidden overflow-y-auto'>
        <ul className='flex flex-col justify-center gap-4'>
          {cart.map((item) => (
            <li
              key={item.product.id}
              className='flex flex-col gap-2
          rounded border p-2'>
              <img
                src={item.product.images}
                alt={item.product.title}
                class='w-full rounded block object-cover'
              />
              <div className='flex justify-center text-sm'>
                <strong className='text-sm font-semibold'>
                  {item.product.title}
                </strong>
                - ${item.product.price}
              </div>

              <footer className='flex justify-center items-center gap-2'>
                <small> Qty: {item.quantity} </small>
                <button
                  onClick={() => handleAddToCart(item.product)}
                  className='p-2 hover:scale-110'>
                  +
                </button>
                <button onClick={() => handleRemoveToCart(item.product)}>
                  -
                </button>
              </footer>
            </li>
          ))}
        </ul>

        <button
          onClick={() => clearCart()}
          class='hover:scale-110 border rounded-sm p-1 mt-2'>
          <IconCartRemove />
        </button>
      </aside>
    </div>
  )
}
