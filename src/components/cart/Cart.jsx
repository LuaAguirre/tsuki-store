import IconCart from '../icons/IconCart'
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
          <button className='cart-button flex items-center z-20 cursor-pointer hover:bg-gray-200 rounded-full p-2'>
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
                className='flex flex-col gap-2 rounded-md border p-4'>
                <img
                  src={item.product.images}
                  alt={item.product.title}
                  className='w-full rounded block object-cover'
                />

                <div className='grid grid-rows-3 w-full h-28 mt-2 p-2 pl-0 gap-4'>
                  <div className='flex items-center'>
                    <strong className='font-semibold'>
                      {item.product.title}
                    </strong>
                  </div>

                  <div className='mt-1'>${item.product.price}</div>

                  <footer className='flex justify-end items-center gap-2'>
                    <small>Qty: {item.quantity}</small>

                    <div>
                      <button
                        onClick={() => handleAddToCart(item.product)}
                        className='p-1 rounded-sm hover:bg-gray-200'>
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveToCart(item.product)}
                        className='p-1 rounded-sm hover:bg-gray-200'>
                        -
                      </button>
                    </div>
                  </footer>
                </div>
              </li>
            ))}
          </ul>

          <SheetFooter>
            <div className=' w-96 flex justify-between items-center'>
              <h2>Total: ${totalAmount.toFixed(2)}</h2>

              <div className='flex gap-4'>
                <SheetClose asChild>
                  <Button type='submit'>Buy</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    type='submit'
                    variant='ghost'
                    className='hover:bg-gray-200'
                    onClick={() => clearCart()}>
                    Clear
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
