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

  return <Button onClick={handleClick}>Agregar al carrito</Button>
}
