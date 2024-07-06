'use client'
import { IconAddCart } from '../icons/IconAddCart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export function ToastAddCart({ product, handleAddToCart }) {
  const { toast } = useToast()

  const handleClick = () => {
    handleAddToCart(product)
    toast({
      description: 'Your product was added to the cart.'
    })
  }

  return (
    <Button
      className='hover:scale-110'
      variant='outline'
      onClick={handleClick}>
      <IconAddCart />
    </Button>
  )
}
