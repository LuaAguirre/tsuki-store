import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import type { Product } from '@/types/product'

export function ToastAddCart({
  product,
  handleAddToCart
}: {
  product: Product
  handleAddToCart: (product: Product) => void
}) {
  const { toast } = useToast()

  const handleClick = () => {
    handleAddToCart(product)
    toast({
      description: 'Your product was added to the cart.'
    })
  }

  return (
    <button
      className='snipcart-add-item'
      data-item-id='starry-night'
      data-item-price='79.99'
      data-item-description='High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.'
      data-item-image='/assets/images/starry-night.jpg'
      data-item-name='The Starry Night'>
      Add to cart
    </button>
  )
}
