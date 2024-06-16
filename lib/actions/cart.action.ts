'use server'
import { db } from "../db";

export async function addProductToCart(userId:string,productId:string,quantity:number) {
    await db.cart.create({
      data: {
        userId,
        productId,
        quantity
      },
    });
  }
  