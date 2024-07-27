import '../styles/Products.css'
import { useFilterStore } from '@/stores/useFilterStore'
import { ProductsItems } from './products/ProductsItems'
import { type Product } from '@/types/product'
import { Skeleton } from '@/components/ui/skeleton'
import { useState, useEffect } from 'react'

export function SkeletonCard() {
  return (
    <li className='flex flex-col gap-2 p-4 bg-[#e9eaea] dark:bg-[#181726] border rounded-lg group items-center'>
      <div className='rounded-md p-1 h-96 overflow-hidden'>
        <Skeleton className='h-full w-full rounded-md' />
      </div>
      <div className='grid grid-rows-3 w-full h-28 p-1'>
        <div className='flex items-center truncate'>
          <Skeleton className='h-4 w-[80%]' />
        </div>
        <div className='flex items-center opacity-80 text-sm'>
          <Skeleton className='h-4 w-[50%]' />
        </div>
        <div className='flex items-center justify-end'>
          <Skeleton className='h-6 w-20' />
        </div>
      </div>
    </li>
  )
}

export function Products() {
  const filteredProducts = useFilterStore((state) => state.filteredProducts())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (filteredProducts.length > 0 && loading) {
      setLoading(false)
    }
  }, [filteredProducts, loading])

  if (loading) {
    return (
      <div className='w-full flex justify-center items-center'>
        <ul className='grid gap-8 w-full '>
          {[...Array(4)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </ul>
      </div>
    )
  }

  if (!filteredProducts.length) {
    return <div className='flex justify-center'>No products found</div>
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <ul className='grid gap-8 w-full '>
        {filteredProducts?.slice(0, 16).map((product: Product) => (
          <ProductsItems
            key={product.id}
            product={product}
            {...product}
          />
        ))}
      </ul>
    </div>
  )
}
