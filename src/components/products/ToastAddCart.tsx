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
      description: 'Tu producto ha sido agregado al carrito.'
    })
  }

  return <Button onClick={handleClick}>Agregar al carrito</Button>
}
