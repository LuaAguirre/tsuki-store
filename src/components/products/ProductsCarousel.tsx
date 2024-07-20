import { Card, CardContent } from '@/components/ui/card'
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
            <div className='p-1'>
              <img
                src={image}
                alt={`Imagen ${index + 1} del producto`}
                className=' rounded-md'
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
