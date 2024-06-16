import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { auth } from "@/auth";
import { Suspense } from "react";
import Loading from "./loading";
import Blob1 from "@/components/blob1";
import Blob2 from "@/components/blob2";
import "./globals.css";

const Toaster = dynamic(
  ()=>import("@/components/ui/sonner").then((m)=>m.Toaster),{ssr:false}
);
const Provider = dynamic(
  () => import("./provider"),
  { ssr: false }
);



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication using Auth.js",
  description: " Authentication using auth.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
          <Suspense fallback={<Loading />}>
            <Blob1 />
            <Blob2 />
             <Provider session={session}>
            <div className="min-h-dvh overflow-x-hidden bg-background backdrop-blur-lg overflow-y-scroll">
              {children}
            </div>
            <Toaster position="top-right"
              toastOptions={{ 
                classNames: {
                  error: "bg-red-400",
                  success: "bg-green-400 text-gray-700",
                  warning: "bg-yellow-400 text-gray-700",
                  info: "bg-blue-400",
                },
              }}
              />
              </Provider>
          </Suspense>
      </body>
    </html>
  );
}
