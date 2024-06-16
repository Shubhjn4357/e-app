import { getCart } from '@/data/cart';
import React from 'react'

 const CartCounterBadge = async({id,children}:{id:string,children:React.ReactNode}) => {
    const carts =await getCart(id);
    return (<div className='relative'>
       {children}
       {carts.length > 0 && <span className="absolute -top-2 -right-1 text-xs  font-bold rounded-full bg-destructive px-2">{carts.length}</span>}
  </div>
  )
}
export default CartCounterBadge

