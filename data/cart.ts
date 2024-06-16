'use server'
import { db } from "@/lib/db";

export async function getCart(userId:string) {
    const carts = await db.cart.findMany({
        where:{
            userId
        }
    })
    return carts
}