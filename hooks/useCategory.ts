import { useState, useEffect, useTransition } from 'react';
import { getCategory } from "@/data/categories";
import { Category } from '@prisma/client';

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, startTransition] = useTransition();
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCategory = () => {
      startTransition(async () => {
        try {
          const data = await getCategory();
          setCategory(data);
        } catch (err) {
          setError(err);
        } finally {
        }
      })
    };
    fetchCategory();
  }, []);

  return { category, isLoading, error };
};