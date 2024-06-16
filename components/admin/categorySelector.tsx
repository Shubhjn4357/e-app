import React, { useEffect, useState } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import CardWrapper from "../cardWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useFormContext } from "react-hook-form";
import CreateCategory from "./createCategory";
import { useCategory } from "@/hooks/useCategory";
import { Category } from "@prisma/client";
const CategorySelector = ({ isPending }: { isPending?: boolean }) => {
  const form = useFormContext();
  const [categories,setCategories]= useState<Category[]>([])
  const { category, isLoading } = useCategory();
  useEffect(() => {
    setCategories(category);
  },[category])
 const handleAddCategory = (newcategory:Category) => {
   setCategories((prev) => [...prev, newcategory]);
 };
  const handleCategoryChange = (category: string) => {
    form.setValue("category", category);
  };
  return (
    <CardWrapper
      title="Product Category"
      footer={<CreateCategory onAddCategory={handleAddCategory} />}
    >
      <div className="grid gap-6">
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={handleCategoryChange}
                  defaultValue={field.value}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger aria-label="Select category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {!isLoading &&
                      categories.map((cat) => (
                        <SelectItem key={cat.name} value={cat.name}>
                          {cat.name.toUpperCase()}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </CardWrapper>
  );
};

export default CategorySelector;
