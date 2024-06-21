'use client'
import { ProductsWithCart } from '@/types'
import React, { useTransition } from 'react'
import { Button } from '../ui/button'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { addCartQuantity, subtractCartQuantity } from '@/data/cart'
import { CgSpinnerAlt } from "react-icons/cg";
const CartControl = ({ cart }: { cart: ProductsWithCart }) => {
    const [isPending, startTransition] = useTransition();
    const subtract = () => {
        startTransition(async () => {
            await subtractCartQuantity(cart.id, cart.quantity)
        })
    }
    const add = () => {
        startTransition(async () => {
            await addCartQuantity(cart.id, cart.quantity)
        })
    }
  return (
        <div className="d-center p-2 gap-2">
            <Button disabled={isPending} size="icon" variant="outline" onClick={subtract}><FaMinus/></Button>
            <span className="p-2">{isPending?<CgSpinnerAlt className="animate-spin" /> : cart.quantity}</span>
            <Button disabled={cart.quantity===10 || isPending} size="icon" variant="outline" onClick={add}><FaPlus/></Button>
        </div>
  )
}

export default CartControl