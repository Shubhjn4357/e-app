import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import Navbar from "@/components/nav/navbar";
import NavSkeleton from '@/components/nav/navSkeleton';
const UserLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Suspense fallback={<NavSkeleton/>}>
          <Navbar/>
        </Suspense>
        {children}
        </div>
  )
}

export default UserLayout