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
    <Button
      onClick={handleClick}
      data-item-custom1-name='Talla'
      data-item-custom1-options='S|M|L|XL'
      className='snipcart-add-item'
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-description={product.description}
      data-item-image={product.images[0]}
      data-item-name={product.title}
      data-item-url='/src/mocks/snipcartProducts.json'>
      Agregar al carrito
    </Button>
  )
}
