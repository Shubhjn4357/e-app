
import { getProductById } from '@/data/product';
import React, { Suspense } from 'react'
import ImageGrid from '@/components/product/ImageGrid';
import ProductDetail from '@/components/product/productDetail';

const ProductPage = async({params}:{params:{id:string}}) => {
    const { id } = params;
  const product = await getProductById(id)
  console.log(product)
  if (product) {
    return (
      <div className=" grid md:grid-cols-2 p-4 max-w-screen-lg h-full mx-auto space-y-10">
        <Suspense fallback={<div>Loading...</div>}>
          <ImageGrid images={product.image} />
        </Suspense>
        <div className="overflow-y-scroll max-h-[30rem]">
          <ProductDetail product={product} />
        </div>
      </div>
  ) 
  }
  return;
}

export default ProductPage
