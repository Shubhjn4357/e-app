import { z } from "zod";
const MAX_FILE_SIZE = 1024 * 1024 * 10;
// 1024 is the number of bytes in a kilobyte (KB)
// 1024 * 1024 is the number of bytes in a megabyte (MB), which is equal to 1,048,576 bytes
// 1024 * 1024 * 10 is the number of bytes in 10 megabytes (MB), which is equal to 10,485,760 bytes
export const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
export const ImageSchema =  z.object({
    file: z.any().refine(file=>file?.size <= MAX_FILE_SIZE,{
      message: `Max image size is 5MB.`,
    }).refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
    color: z.string().optional(),
  })
export const ImageArray = z.array(ImageSchema);
export const productStatus = z.enum([
  'DRAFT',
  "PUBLISHED",
  'ARCHIVED'
], {
  message:"invalid Value"
})
const BaseProductSchema = z.object({
  name: z.string().min(1,{
    message: "Name is required",
  }),
  description: z.string().min(1,{
    message: "Description is required",
  }),
  stock: z.number().int().refine((stock) => stock > 0, {
    message: "Stock is required and must be greater than 0",
  }),
  price: z.number().int().refine((price) => price > 0, {
    message: "Price is required and must be greater than 0",
  }),
  category: z.string().min(1,{
    message: "Category is required",
  }),
  status: productStatus
})
export const ProductSchema = BaseProductSchema.extend({
    images:ImageArray
});


export const UploadableProductSchema = BaseProductSchema.extend({
  images: z.array(
    z.object({
      file: z.string(),
      color: z.string().optional(),
    })
  )
});
export type BaseProductSchemaType =z.infer<typeof BaseProductSchema>;
export type ImageArrayType =z.infer<typeof ImageArray>;
export type ImageType = z.infer<typeof ImageSchema>;
export type ProductType = z.infer<typeof ProductSchema>;
export type UploadableProductType = z.infer<typeof UploadableProductSchema>;