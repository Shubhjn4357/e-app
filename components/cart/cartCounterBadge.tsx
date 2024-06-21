import React from 'react'

 const CartCounterBadge = async({length,children}:{length:number,children:React.ReactNode}) => {
    return (<div className='relative'>
       {children}
       {length > 0 && <span className="absolute -top-2 -right-1 text-xs  font-bold rounded-full bg-destructive px-2">{length}</span>}
  </div>
  )
}
export default CartCounterBadge

