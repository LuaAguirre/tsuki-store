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
      className='snipcart-add-item'
      data-item-id={product.id}
      data-item-price='59.99' // Convertir el precio a string
      data-item-description={product.description}
      data-item-image={product.images[0]} // Usar la primera imagen del array
      data-item-name={product.title}
      data-item-url={product.url} // Asegúrate de que esta URL sea accesible públicamente
    >
      Agregar al carrito
    </Button>
  )
}
