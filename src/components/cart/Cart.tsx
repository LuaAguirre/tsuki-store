import IconCart from './IconCart'
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
import type { Product } from '@/types/product'
import type { CartItem } from '@/types/cart'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const removeCart = useCartStore((state) => state.removeCart)
  const totalAmount = useCartStore((state) => state.totalAmount)

  const handleAddToCart = (product: Product) => {
    setCart(product)
  }
  const handleRemoveToCart = (product: Product) => {
    removeCart(product)
  }

  const cartCount = cart.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  )

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className='cart-button flex items-center z-20 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg py-1 px-1.5'>
            <IconCart count={cartCount} />
          </button>
        </SheetTrigger>

        <SheetContent className='bg-white/90 p-8 overflow-y-auto flex flex-col gap-4 dark:bg-zinc-900 w-screen h-screen md:w-auto md:h-auto'>
          <SheetHeader className='text-left'>
            <SheetTitle className='text-left'>Tu Carrito</SheetTitle>
            <SheetDescription className='text-left'>
              Haz cambios en tu carrito aquí, presiona comprar cuando estés
              listo.
            </SheetDescription>
          </SheetHeader>

          <ul className='flex flex-col justify-center gap-4'>
            {cart.map((item: CartItem) => (
              <li
                key={item.product.id}
                className='flex flex-col gap-2 rounded-lg border p-4'>
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className='w-full rounded-md block object-cover'
                />

                <div className='grid grid-rows-3 w-full h-28 mt-2 p-2 pl-0 gap-4'>
                  <div className='flex items-center'>
                    <strong>{item.product.title}</strong>
                  </div>

                  <div className='mt-1 text-sm opacity-80'>
                    S/. {item.product.price}
                  </div>

                  <footer className='flex justify-end items-center gap-2'>
                    <small>Qty: {item.quantity}</small>

                    <div>
                      <button
                        onClick={() => handleAddToCart(item.product)}
                        className='p-1 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-800'>
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveToCart(item.product)}
                        className='p-1 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-800'>
                        -
                      </button>
                    </div>
                  </footer>
                </div>
              </li>
            ))}
          </ul>

          <SheetFooter>
            <div className='w-full flex justify-between items-center'>
              <h2>Total: S/. {totalAmount.toFixed(2)}</h2>

              <div className='flex gap-4'>
                <SheetClose asChild>
                  <Button type='submit'>Comprar</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    type='submit'
                    variant='ghost'
                    className='hover:bg-gray-200 dark:hover:bg-gray-800'
                    onClick={() => clearCart()}>
                    Borrar
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
