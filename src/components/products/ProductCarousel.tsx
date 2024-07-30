import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import type { Product } from '@/types/product'
import { useState, useEffect, useRef } from 'react'

export function ProductCarousel({ product }: { product: Product }) {
  const [areImagesLoading, setAreImagesLoading] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setAreImagesLoading(true)
  }

  const checkIfInView = () => {
    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect()
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        handleMouseEnter()
      }
    }
  }

  useEffect(() => {
    // Define the breakpoint for mobile devices (e.g., 768px)
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      checkIfInView() // Check initially on mobile
      window.addEventListener('scroll', checkIfInView)
      window.addEventListener('resize', checkIfInView)
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', checkIfInView)
        window.removeEventListener('resize', checkIfInView)
      }
    }
  }, [])

  return (
    <Carousel
      onMouseEnter={
        !areImagesLoading && window.innerWidth > 768
          ? handleMouseEnter
          : undefined
      }
      ref={carouselRef}>
      <CarouselContent>
        {product.images.map((image: string, index: number) => (
          <CarouselItem key={index}>
            <div className='rounded-md p-1 h-96 overflow-hidden'>
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
