'use client'
import { ProductsWithCart } from '@/types'
import Image from 'next/image'
import React, { useTransition } from 'react'
import CardWrapper from '../cardWrapper'
import { formateCapital, formateCurrency } from '@/lib/formatter'
import CartControl from './cartControl'
import { Button } from '../ui/button'
import { FaX } from 'react-icons/fa6'
import { deleteCart } from '@/data/cart'
import { Skeleton } from '../ui/skeleton'
import { CgSpinnerAlt } from "react-icons/cg";
const ProductPreview = ({ cart }: { cart: ProductsWithCart }) => {
  const [isPending, startTransition] = useTransition();
  const deleteTile = () => {
    startTransition(async () => {
      await deleteCart(cart.id)
    })
  }
  const ProductSkeleton=(
    <>
    <Skeleton className='size-20'/>
            <div className="flex flex-col gap-2 px-2">
                <Skeleton className='w-20 h-4 rounded-lg'/>
                <Skeleton className='w-20 h-4 rounded-lg'/>
            </div>
          <div className="d-center p-2 gap-2">
            <Skeleton className='size-10'/>
            <span className="p-2"><CgSpinnerAlt className="animate-spin" /></span>
            <Skeleton className='size-10'/>
        </div>
    </>
  )
  return (
      <CardWrapper className='relative p-1 group flex justify-between items-center gap-2'>
      <Button disabled={isPending} onClick={deleteTile} className='absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100 size-4 p-1' radius="full" size="icon" variant="secondary" ><FaX /></Button>
      {
      isPending?ProductSkeleton:
        <>
        <div className="relative max-w-20 max-h-20 size-20">
                  <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-lg object-cover' src={cart.product.image[0].file} fill alt={cart.product.name} />
              </div>
              <div className="flex flex-col gap-2 px-2">
                  <p>{ formateCapital(cart.product.name)}</p>
                    <p>{formateCurrency(cart.product.price)}</p>
              </div>
            <CartControl cart={cart} />
        </>
      }
    </CardWrapper>
  )
}

export default ProductPreview