import '../../styles/Cart.css'
import IconCart from '../icons/IconCart'
import CartRemoveButton from './CartRemoveButton'
import { useCartStore } from '../../stores/useCartStore'


export default function Cart () {
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)

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
   bg-white/90 fixed right-0 top-0 w-1/5 p-8 pt-20 z-10 hidden'>
    <ul> 
      {
        cart.map(item => (
          <li key={item.product.id} className='flex flex-col gap-2
          rounded border p-2'>
      <img
        src={item.product.images}
        alt={item.product.title}
        class='w-full rounded block object-cover'
      />
      <div className='flex justify-center text-sm'>
        <strong className='text-sm font-semibold'>{item.product.title}</strong> - ${item.product.price}
      </div>

      <footer className='flex justify-center items-center gap-2'>
        <small> Qty: {item.quantity} </small>
        <button onClick={() => setCart(item)} className='p-2 hover:scale-110'>+</button>
      </footer>
    </li>
        ))
      }
    </ul>

    <CartRemoveButton className='' />


  </aside>
  </div>
  )
}