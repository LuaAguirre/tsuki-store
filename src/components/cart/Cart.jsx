import '../../styles/Cart.css'
import IconCart from '../icons/IconCart'
import IconCartRemove from '../icons/IconCartRemove'
import { useCartStore } from '../../stores/useCartStore'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetFooter
} from '@/components/ui/sheet'
import { Button } from '../ui/button'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const removeCart = useCartStore((state) => state.removeCart)
  const totalAmount = useCartStore((state) => state.totalAmount)

  const handleAddToCart = (product) => {
    setCart(product)
  }
  const handleRemoveToCart = (product) => {
    removeCart(product)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className='cart-button items-center flex justify-center p-1 absolute right-16 top-5 z-20 cursor-pointer hover:scale-150'>
            <IconCart count={cartCount} />
          </button>
        </SheetTrigger>

        <SheetContent className='bg-white/90 p-8 overflow-y-auto flex flex-col gap-4'>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>
              Make changes to your cart here. Click buy when you're done.
            </SheetDescription>
          </SheetHeader>

          <ul className='flex flex-col justify-center gap-4'>
            {cart.map((item) => (
              <li
                key={item.product.id}
                className='flex flex-col gap-2 rounded border p-2'>
                <img
                  src={item.product.images}
                  alt={item.product.title}
                  className='w-full rounded block object-cover'
                />

                <div className='flex justify-center text-sm'>
                  <strong className='text-sm font-semibold'>
                    {item.product.title}
                  </strong>
                  - ${item.product.price}
                </div>

                <footer className='flex justify-center items-center gap-2'>
                  <small>Qty: {item.quantity}</small>
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

          <SheetFooter>
            <div className=' w-96 flex justify-between items-center'>
              <h2>Total: ${totalAmount.toFixed(2)}</h2>

              <div>
                <SheetClose asChild>
                  <Button type='submit'>Buy</Button>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>

          <div className='flex justify-center'>
            <button
              onClick={() => clearCart()}
              className='hover:scale-110 border rounded-sm p-2'>
              <IconCartRemove />
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
