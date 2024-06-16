import React from 'react'
import { ProductsWithImageAndReview } from "@/types";
import { formateCapital, formateCurrency } from '@/lib/formatter';
import {  FaStar } from 'react-icons/fa6';
import ReviewCard from './reviewCard';
import AddToCart from './addToCart';
const ProductDetail = ({ product }: { product: ProductsWithImageAndReview }) => {

  return (
    <div className="relative flex flex-col items-start gap-4 space-y-4 px-4 h-min">
          <h1 className="text-2xl font-bold sticky top-0 backdrop-blur-lg w-full">{formateCapital(product.name)}</h1>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <span className="text-xl">
            {formateCurrency(product.price)} 
          </span>
          </div>
          <div className="flex gap-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
      </div>
          <p className="line-clamp-3 text-sm text-slate-500">
              {product.description} lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
          </p>
          <div className="grid gap-2">
              <p className="text-sm font-bold">Colors</p>
                <div className="flex gap-4">
                {product.image.map((image, key) => {
                    return <span key={key} className={`hover:scale-110 transition-all duration-300 cursor-pointer size-8 rounded-full ring ring-slate-500 hover:ring-slate-300`} style={{'background':image.color as string}} />
                    })}
                </div>
        </div>
      <AddToCart id={ product.id} />
      <div className="flex flex-col gap-2">
        <h1 className='font-bold'>Highlights</h1>
        <ul className='list-disc list-inside'>
          <li>lorem ipsum lorem ipsum</li>
          <li>lorem ipsum lorem ipsum</li>
          <li>lorem ipsum lorem ipsum</li>
          <li>lorem ipsum lorem ipsum</li>
          {/* {product.feature.map((feature,key) => {
            return <li key={ key}>{feature }</li>
          })} */}
          </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className="text-2xl border-b-2 border-foreground mb-2">Rating & Review</h1>

        {new Array(3).fill(0).map((_, key) => {
          return <ReviewCard  key={key}/>
        })}
        {/* {product.reviews.map((review, key) => {
          return <ReviewCard review={review} key={key}/>
        })} */}
      </div>
    </div>
  )
}

export default ProductDetail