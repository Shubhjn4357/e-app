'use server'
import { revalidateTag } from "next/cache";
import { db } from "../db";

export async function addProductToCart(userId: string, productId: string, quantity: number) {
  const existingProduct = await db.cart.findFirst({
    where: {
      userId,
      productId,
    },
  });
  if (existingProduct) {
    await db.cart.update({
      where: {
        id: existingProduct.id,
      },
      data: {
        quantity: existingProduct.quantity + quantity,
      },
    });
  } else {
    await db.cart.create({
      data: {
        userId,
        productId,
        quantity
      },
    });
  }
  revalidateTag('cart')
}
  