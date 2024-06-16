'use client'
import React, { useState, useTransition } from 'react'
import { Button } from '../ui/button'
import { FaBagShopping } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import { AiOutlineLoading } from "react-icons/ai";
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { addProductToCart } from '@/lib/actions/cart.action'
import { toast } from 'sonner'
const AddToCart = ({id}:{id:string}) => {
    const [isPending, startTranstion] = useTransition();
    const [success, setSuccess] = useState(false)
    const user = useCurrentUser();
    const AddProductToCart = () => {
        startTranstion(async () => {
            if (user) {
                addProductToCart(user.id as string,id,1)
                setSuccess(true)
            }
            else {
                toast("Please login to add to cart")
            }
        })
        
    }
    console.log({ success })
  return (
      <Button variant="secondary" disabled={isPending} size="lg" className='d-center' onClick={AddProductToCart}>
          {(!success && isPending) && <span className='text-info-500 flex gap-2'><AiOutlineLoading className='animate-spin'/>Adding...</span>}
          {(!success && !isPending) && <span className='flex gap-2'><FaBagShopping /> Add To Bag</span>}
          {success && <span className='text-green-500 flex gap-2'><FaCheckCircle/>Added</span>}
      </Button>
  )
}

export default AddToCart