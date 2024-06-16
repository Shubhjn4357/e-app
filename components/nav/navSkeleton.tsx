import React from 'react'
import { Skeleton } from '../ui/skeleton'

const NavSkeleton = () => {
  return (
      <div className='max-w-fit flex sticky top-2 p-2 inset-x-0 mx-auto border border-transparent rounded-full bg-background backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[50] pr-2 pl-8 items-center justify-between space-x-4'>
          <Skeleton className='h-5 w-20 p-2 rounded-full'/>
          <Skeleton className='h-5 w-20 p-2 rounded-full'/>
          <Skeleton className='h-5 w-20 p-2 rounded-full'/>
          <Skeleton className='h-5 w-20 p-2 rounded-full'/>
    </div>
  )
}

export default NavSkeleton