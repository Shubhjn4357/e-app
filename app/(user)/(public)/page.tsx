import ProductCard from '@/components/product/productCard'
import { getNewProduct, getPopularProduct } from '@/data/product'
import { ProductsWithImage } from '@/types'
import { Suspense } from 'react'


const products:ProductsWithImage[]=[
  {
    "id": "clx8xmqxb0007tw3kf5k92bcy",
    "name": "Productus Primus",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 200,
    "stock": 4,
    "status": "PUBLISHED",
    "orderIds": [],
    "cartIds": [],
    "categoryName": "saree",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "image": [
      {
        "id": "clx8xmqxb0008tw3kt6w54epx",
        "file": "https://picsum.photos/200",
        "productId": "clx8xmqxb0007tw3kf5k92bcy",
        "color": "#000000"
      }
    ]
  },
  {
    "id": "clx8xmqxb0009tw3kf5k92bcz",
    "name": "Productus Secundus",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "price": 250,
    "stock": 3,
    "status": "PUBLISHED",
    "orderIds": [],
    "cartIds": [],
    "categoryName": "kurta",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "image": [
      {
        "id": "clx8xmqxb0010tw3kt6w54epz",
        "file": "https://picsum.photos/200",
        "productId": "clx8xmqxb0009tw3kf5k92bcz",
        "color": "#FFFFFF"
      }
    ]
  },
  {
    "id": "clx8xmqxb0011tw3kf5k92bda",
    "name": "Productus Tertius",
    "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    "price": 300,
    "stock": 2,
    "status": "PUBLISHED",
    "orderIds": [],
    "cartIds": [],
    "categoryName": "lehenga",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "image": [
      {
        "id": "clx8xmqxb0012tw3kt6w54epa",
        "file": "https://picsum.photos/200",
        "productId": "clx8xmqxb0011tw3kf5k92bda",
        "color": "#FF0000"
      }
    ]
  },
  {
    "id": "clx8xmqxb0013tw3kf5k92bdb",
    "name": "Productus Quartus",
    "description": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "price": 350,
    "stock": 1,
    "status": "PUBLISHED",
    "orderIds": [],
    "cartIds": [],
    "categoryName": "saree",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "image": [
      {
        "id": "clx8xmqxb0014tw3kt6w54epb",
        "file": "https://picsum.photos/200",
        "productId": "clx8xmqxb0013tw3kf5k92bdb",
        "color": "#00FF00"
      }
    ]
  },
  {
    "id": "clx8xmqxb0015tw3kf5k92bdc",
    "name": "Productus Quintus",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "price": 400,
    "stock": 5,
    "status": "PUBLISHED",
    "orderIds": [],
    "cartIds": [],
    "categoryName": "lehenga",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "image": [
      {
        "id": "clx8xmqxb0016tw3kt6w54epc",
        "file": "https://picsum.photos/200",
        "productId": "clx8xmqxb0015tw3kf5k92bdc",
        "color": "#FFFF00"
      }
    ]
  }
]
  
const LandingPage = async () => {
  // const [NewProduct, PopularProduct] = await Promise.all([getNewProduct(), getPopularProduct()]);
  // console.log({NewProduct})
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductSusupense products={products} />
      </Suspense>
    </div>
  )
}

export default LandingPage

const ProductSusupense = ({ products }: { products: ProductsWithImage[] }) => {
  return <>
    {products.map((product, key) => {
      return <ProductCard key={key} product={product} />
    })}
  </>
}
