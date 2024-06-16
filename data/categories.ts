'use server'
import { db } from "@/lib/db";

export const createCategory = async (data:string) => {
  try {
    const category = await db.category.create({ data: { name: data.toLowerCase() } });
    return category;
  } catch (error) {
    throw error;
  }
};
export const updateCategory = async (data:{name:string}) => {
  try {
    const category = await db.category.update({
      where: { name: data.name },
      data: { name: data.name.toLowerCase() },
    });
    return category;
  } catch (error) {
    throw error;
  }
};
export const deleteCategory = async (name:string) => {
  try {
    const category = await db.category.delete({
      where: { name:name }
    });
    return category;
  } catch (error) {
    throw error;
  }
};

export const getCategory = async (args?:any) => {
  try {
    const category = await db.category.findMany(args && args);
    return category;
  } catch (error) {
    throw error;
  }
};
