'use client'
import { Image } from '@prisma/client';
import NextImage from 'next/image';
import {motion} from "framer-motion"
import { useState,Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
 const ImageGrid = ({ images }: { images: Image[]; }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  if (images.length < 1) {
    return null;
  }
  return <div className="grid grid-cols-4 gap-4 h-min">
    <motion.div initial={{ opacity: 0,scale:0 }} animate={{ opacity: 1,scale:1, transition: { duration: 0.3, type: "spring" } }} className="col-span-4 relative aspect-square max-w-96 h-auto overflow-hidden cursor-pointer">
      <Suspense fallback={<Skeleton className='size-96 rounded-xl' />}>
        <NextImage sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=' rounded-xl object-cover' fill src={selectedImage.file} alt={images[0].id} />
      </Suspense>
    </motion.div>
    <Suspense fallback={
      <>
      <Skeleton className='size-full rounded-xl' />
      <Skeleton className='size-full rounded-xl' />
      <Skeleton className='size-full rounded-xl' />
      <Skeleton className='size-full rounded-xl' />
    </>}>
      {images.map((image, key) => {
        return <motion.div whileHover={{ scale: 0.9, transition: { duration: 0.3, type: "spring" } }} key={key} className="relative col-span-1 aspect-square overflow-hidden cursor-pointer" >
          <NextImage sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-xl object-cover' fill src={image.file} alt={image.id} onClick={() => setSelectedImage(image)} />
          </motion.div>
      })}
    </Suspense>
  </div>;
};
export default ImageGrid;

