import { Review } from '@prisma/client'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaStar, FaUser } from 'react-icons/fa6'

const ReviewCard = ({review}:{review?:Review}) => {
  return (
    <Card className="border-0 p-1">
      <CardHeader className='py-0 px-1'>
        <div className="flex items-start justify-start gap-2">
        <Avatar>
          <AvatarImage src={"" || ""} />
          <AvatarFallback className="bg-gradient">
            <FaUser className="size-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex p-2 flex-col">
          <p>Name</p>
            <p className='text-sm text-slate-500'>July 16 21</p>
            <div className="flex gap-2">
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            </div>
        </div>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2 p-1'>
        {/* {new Array(review.rating).fill(0).map((_, key) => {
          return <FaStar className='text-yellow-400' key={key}/>
        })} */}
       
      <div className='line-clamp-3'>
        {review?.comment}
        lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </div>
      </CardContent>
    </Card>
  )
}

export default ReviewCard