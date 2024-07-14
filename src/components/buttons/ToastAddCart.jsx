'use client'

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
      variant='outline'
      onClick={handleClick}>
      Add to cart
    </Button>
  )
}
