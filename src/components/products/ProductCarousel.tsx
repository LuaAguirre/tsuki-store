import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import type { Product } from '@/types/product'
import { useState } from 'react'

export function ProductCarousel({ product }: { product: Product }) {
  // Extra images loading
  const [areImagesLoading, setAreImagesLoading] = useState(false)

  const handleMouseEnter = () => {
    // Start loading additionals images
    setAreImagesLoading(true)
  }

  return (
    //onMouseEnter for the hover
    <Carousel onMouseEnter={handleMouseEnter}>
      <CarouselContent>
        {product.images.map((image: string, index: number) => (
          <CarouselItem key={index}>
            <div className='rounded-md p-1 h-96 overflow-hidden '>
              <img
                src={index === 0 || areImagesLoading ? image : undefined}
                alt={`Imagen ${index + 1} del producto`}
                className='rounded-md size-90'
                loading={index === 0 ? 'eager' : 'lazy'}
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
