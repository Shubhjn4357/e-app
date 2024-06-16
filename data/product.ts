'use server'
import { db } from "@/lib/db"
export async function getAllProduct() {
  const product = await db.product.findMany({
    include: {
      image: true,
      orders: true,
      reviews: true,
      category: true,
      carts: true,
      Payment: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
  return product
}
 export async function getNewProduct() {
  const product = db.product.findMany({
    where: {
      status : 'PUBLISHED',
    },
    include: {
      image: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  })
  return product
}
export async function getPopularProduct() {
  const product = db.product.findMany({
     where: {
      status : 'PUBLISHED',
    },
    include: {
      image: true,
    },
    orderBy: {
      reviews: {
        _count: 'desc',
      },
    },
    take: 10,
  })
  return product
}
export async function getProductById(id:string) {
    const product = await db.product.findUnique({
        where: {
            id
        },
        include: {
          image: true,
          reviews:true,
        }
    })
    return product;
}