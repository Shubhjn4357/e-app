import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formateCurrency } from '@/lib/formatter'
import { ProductsWithImage } from '@/types'
import NextImage from 'next/image'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
const ProductCard = async ({ product }: { product: ProductsWithImage }) => {
  return (
    <Card className='rounded-md bg-transparent backdrop-blur-lg'>
      <div className="group relative aspect-video w-full h-auto overflow-hidden">
        <Link href={`/${product.id}/product`}>
          <NextImage className='group-hover:scale-105 duration-300 rounded-md' src={product.image[0].file} fill alt={product.name} />
        </Link>
          <div className="group-hover:opacity-100 opacity-0 absolute top-2 right-2">
             <Button variant="ghost" size="icon" radius="full"><FaHeart className='text-destuctive'/></Button>
          </div>
          <div className="group-hover:opacity-100 opacity-0 absolute bottom-2 right-2">
             <Button variant="ghost" size="icon" radius="full"><FaCartPlus/></Button>
          </div>
        </div>
      <CardContent className='flex justify-between p-4'>
        <div className="flex justify-between">
          {product.name}
        </div>
        <span>
         {formateCurrency(product.price)}
        </span>
      </CardContent>
    </Card>
  )
}
export default ProductCard;