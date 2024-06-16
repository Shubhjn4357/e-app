import React, { useState, useTransition } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { createCategory } from '@/data/categories';
import { Category } from '@prisma/client';
import { toast } from 'sonner';

const CreateCategory = ({
  onAddCategory,
}: {
  onAddCategory?: (category:Category) => void;
}) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const AddCategories = async () => {
    if (!categoryName) return;
    startTransition(async () => {
      try {
        const category = await createCategory(categoryName);
        onAddCategory && onAddCategory(category);
        toast.success("New category Added");
      } catch (error) {
        toast.error("Failed to Add category")
      }
    });
    setCategoryName("");
  };
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        className="max-w-32"
        disabled={isPending}
        placeholder="Category"
        onChange={(e) => setCategoryName(e.target.value)}
        value={categoryName}
      />
      <Button
        type="button"
        disabled={isPending}
        size="sm"
        onClick={AddCategories}
      >
        Add Category
      </Button>
    </div>
  );
};

export default CreateCategory