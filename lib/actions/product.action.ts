'use server'
import { UploadableProductSchema, UploadableProductType } from "@/schemas/product"
import { db } from "../db"

export const createProduct = async (data: UploadableProductType) => {

    const result = UploadableProductSchema.safeParse(data)
    if (!result.success) {
        return { error: JSON.stringify(result.error)}
    }
    try {
        await db.product.create({
                data: {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: {
                    createMany: {
                        data: data.images,
                    },
                    },
                    status: data.status,
                    stock: data.stock,
                    category: {
                        connectOrCreate: {
                            where: {
                                name: data.category,
                            },
                            create: {
                                name: data.category,
                            }
                        },
                    },
                },
                });
        return {success:"Product Added to Library"}
    }
    catch (error) {
        console.log(error)
        return {error:JSON.stringify(error)}
    }

}