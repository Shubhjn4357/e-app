"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ImageType, ProductSchema, ProductType } from "@/schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import CardWrapper from "../cardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import UploadImage from "./uploadImage";
import CategorySelector from "./categorySelector";
import { remove, upload } from "@/lib/actions/upload.action";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { createProduct } from "@/lib/actions/product.action";
import { toast } from "sonner";
import { getProductById } from "@/data/product";
const ProductForm = ({ edit:id}:{edit:string}) => {
  const [isPending, startTransition] = useTransition();
  const session = useCurrentUser();
  const form = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      stock: 0,
      price: 0,
      category: "",
      images: [],
      status: "PUBLISHED",
    },
  });
  useEffect(() => {
    async function findAndsetProductt(){
      if (id) {
        try {
          const editableProduct = await getProductById(id);
          
        }
        catch (error) {
          toast.error("no product find")
        }
        

      }
    }
    findAndsetProductt();
    return () => {
      
    }
  }, [])
  
  const onSubmit = useCallback(
    async (data: ProductType) => {
      const result = ProductSchema.safeParse(data);
      if (result.error) {
        toast.error(result.error.message);
        return;
      }
      startTransition(async () => {
        for (const image of data.images) {
          const downloadableLink = await upload(image.file, session?.role);
          if (downloadableLink) {
            const uploadableImageWithLink = [];
            uploadableImageWithLink.push({
              ...image,
              file: String(downloadableLink),
            });
            const uploadableData = { ...data, images: uploadableImageWithLink };
            await createProduct(uploadableData).then(async (res) => {
              if (res.success) {
                toast.success(res.success);
              } else {
                for (const image of uploadableData.images) {
                  await remove(image.file, session?.role);
                }
                toast.error(res.error);
              }
            });
          }
        }
        form.reset();
      });
    },
    [form, session?.role]
  );

  const addImage = useCallback(
    (file: ImageType) => {
      form.setValue("images", [...form.getValues().images, file]);
      form.trigger("images");
    },
    [form]
  );
  const removeImage = useCallback(
    (index: number) => {
      const images = form.getValues().images;
      images.splice(index, 1);
      form.setValue("images", images);
      form.trigger("images");
    },
    [form]
  );
  const formSubmitButton = (
    <>
      <Button
        variant="outline"
        size="sm"
        type="reset"
        disabled={isPending}
        onClick={() => form.reset()}
      >
        Discard
      </Button>
      <Button size="sm" type="submit" disabled={isPending}>
        Save Product
      </Button>
    </>
  );
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"
      >
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="size-7"
              type="button"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Product Controller
            </h1>
            <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              {formSubmitButton}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <CardWrapper
                title="Product Details"
                description="Lipsum dolor sit amet, consectetur adipiscing elit"
              >
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              className="w-full"
                              type="text"
                              placeholder="Product Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              disabled={isPending}
                              className="w-full min-h-28"
                              placeholder="Description..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardWrapper>
              <CardWrapper
                title="Stock"
                description="Add stock and price of product"
              >
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Stock</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name="stock"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Stock</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(+e.target.value)
                                  }
                                  type="number"
                                  disabled={isPending}
                                  placeholder="0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="number"
                                  onChange={(e) =>
                                    field.onChange(+e.target.value)
                                  }
                                  disabled={isPending}
                                  placeholder="0.0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardWrapper>
              <CategorySelector isPending={isPending} />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <CardWrapper title="Product Status">
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isPending}
                          >
                            <FormControl>
                              <SelectTrigger
                                id="status"
                                aria-label="Select status"
                              >
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="DRAFT">Draft</SelectItem>
                              <SelectItem value="PUBLISHED">
                                published
                              </SelectItem>
                              <SelectItem value="ARCHIVED">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardWrapper>
              <CardWrapper
                className="overflow-hidden"
                title="Product Images"
                description="Add Image to Showcase The Product"
              >
                <div className="grid grid-cols-3 gap-2 my-2">
                  {form.getValues().images.map((img, key) => {
                    const ImageUri = URL.createObjectURL(img.file);
                    return (
                      <div
                        key={key}
                        className="relative transition-transform duration-200 hover:scale-95"
                      >
                        <Image
                          alt={img.file?.name}
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src={ImageUri}
                          width="84"
                        />
                        <Button
                          size="icon"
                          type="button"
                          radius="full"
                          variant="ghost"
                          className="absolute top-0 right-0 size-5"
                          onClick={() => removeImage(key)}
                        >
                          <XIcon className="size-3" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <UploadImage addImage={addImage} />
              </CardWrapper>
              <CardWrapper
                title="Archive Product"
                description="Archive the Product to hide it from the public"
              >
                <Button size="sm" variant="secondary">
                  Archive Product
                </Button>
              </CardWrapper>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            {formSubmitButton}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
