import { PrismaClient } from "@prisma/client";
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from "firebase/storage";
//  This file is used to create a new PrismaClient instance and export it as db.
//  The PrismaClient instance is then used to interact with the database in the rest of the application.
// If the application is running in production, the PrismaClient instance is created and exported as db.
// If the application is running in development, the PrismaClient instance is created and stored in the globalThis object. because the PrismaClient instance is not hot-reloadable, it is important to store it in the globalThis object so that it is not recreated on every request.
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
};
declare const globalThis: {
  prisma: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
const prisma = globalThis.prisma ?? prismaClientSingleton();
const fireapp = initializeApp(firebaseConfig);
const storage = getStorage(fireapp);
const productRef = ref(storage, 'products/' + process.env.NEXT_PUBLIC_STORAGE_KEY);

export {prisma as db, fireapp, productRef,storage as firestorage};
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;