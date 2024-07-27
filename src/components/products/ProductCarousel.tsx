import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import type { Product } from '@/types/product'

export function ProductCarousel({ product }: { product: Product }) {
  return (
    <Carousel>
      <CarouselContent>
        {product.images.map((image: string, index: number) => (
          <CarouselItem key={index}>
            <div className='rounded-md p-1 h-96 overflow-hidden'>
              <img
                src={image}
                alt={`Imagen ${index + 1} del producto`}
                className='rounded-md size-90 '
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
