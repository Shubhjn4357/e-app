'use server'
import { db } from "@/lib/db";
import {  revalidateTag } from "next/cache";

export async function getCart(userId:string) {
    const carts = await db.cart.findMany({
        where:{
            userId
        }
    })
     revalidateTag("cart")
    return carts
}
export async function getCartWithProduct(userId:string) {
    const carts = await db.cart.findMany({
        where:{
            userId
        },
        include:{
            product: {
                include: {
                    image:true
                }
            }
        },
        
    })
    revalidateTag("cart")
    return carts
}
export const subtractCartQuantity = async(id:string,quantity:number) => {
        if (quantity > 1) {
            await db.cart.update({
                where: {
                    id
                },
                data: {
                    quantity:quantity - 1
                }
            })
        }
        else {
           await deleteCart(id)
        }
     revalidateTag("cart")
    }
   export  const addCartQuantity = async(id:string,quantity:number) => {
        if (quantity < 10) {
            await db.cart.update({
                where: {
                    id
                },
                data: {
                    quantity: quantity + 1
                }
            })
        }
        revalidateTag("cart")
    }
export const deleteCart = async (id: string) => {
       const cart= await db.cart.findFirst(
            {
                where: {
                    id
                }
           })
    if (cart) { 
        await db.cart.delete({
            where: {
                id
            }
        })
    }
     revalidateTag("cart")
    }