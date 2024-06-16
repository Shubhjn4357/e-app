import { Button } from "@/components/ui/button";
import { getAllProduct } from "@/data/product";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const product = await getAllProduct()
  console.log(product)
  return (
   
      
        <main className="flex flex-col h-full gap-4 p-4 lg:p-6">
            <h1 className="text-lg font-semibold md:text-2xl col-span-1">Inventory</h1>
          <div
            className="grid place-items-center rounded-lg border border-dashed shadow-sm h-full"
          >
        {product.length ? (
          JSON.stringify(product)
      ) : (
            <div className="d-center flex-col gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
                </p>
                <Link href="products/add">
              <Button className="mt-4">Add Product</Button>
              </Link>
            </div>)}
          </div>
        </main>
  );
};

export default Products;
