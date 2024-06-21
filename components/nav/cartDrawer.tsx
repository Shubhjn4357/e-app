
import React from 'react'
import CartCounterBadge from '../cart/cartCounterBadge'
import { FaCartShopping } from 'react-icons/fa6'
import Drawer from './drawer'

import ProductPreview from '../product/ProductPreview'
import { ProductsWithCart } from '@/types'
import { Button } from '../ui/button'
import Link from 'next/link'

const CartDrawer = ({ cart }: { cart: ProductsWithCart[] }) => {
    return (<Drawer side='right' trigger={
                <CartCounterBadge length={cart?.length as number} >
                    <FaCartShopping className="size-4 mr-4" />
                </CartCounterBadge>}>
                <div className="flex flex-col justify-between gap-2 h-full">
                    <div className="max-h-40 overflow-y-scroll space-y-8  py-4">
                    {cart.length < 1 ?
                        <div className='d-center border border-dotted rounded-lg h-20'>
                            <p>No items in cart</p>
                        </div> :
                        cart?.map(product => {
                            return <ProductPreview key={product.id} cart={product} />
                        })}
                    </div>
                    <Link href="cart">
                        <Button className='flex gap-2 w-full'>CheckOut <FaCartShopping /></Button>
                    </Link>
                </div>
        
             </Drawer>
  )
}

export default CartDrawer