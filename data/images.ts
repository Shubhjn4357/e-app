'use server'
import { db } from "@/lib/db";
export const getImage = async(args?:any) => {
     try{
    const Image = await db.image.findMany(args)
    return Image;
  } catch (error) {
    throw error;
  }
}

export const getImageByProductId = async(id:string) => {
     try{
    const images = await db.image.findFirst({
      where:{
        productId:id
      }
    })
    return images;
  } catch (error) {
    throw error;
  }
}