"use client";
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const signInHandler = (provider: "apple" | "google") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className=" w-full flex gap-x-2 items-center">
      <Button
        size="lg"
        variant="outline"
        onClick={() => signInHandler("google")}
        className=" w-full"
      >
        <FcGoogle className=" w-6 h-6" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => signInHandler("apple")}
        className=" w-full"
      >
        <FaApple className=" w-6 h-6" />
      </Button>
    </div>
  );
};
