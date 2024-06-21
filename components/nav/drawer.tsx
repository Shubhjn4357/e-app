"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
interface DrawerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  closeIcon?: React.ReactNode;
  headerTitle?: string;
  headerDescription?: string;
  footer?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}
const Drawer = ({
  trigger,
  side,
  headerTitle,
  headerDescription,
  closeIcon,
  children,
  className,
  asChild = false,
  footer,
}: DrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild={asChild}>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        closeIcon={closeIcon}
        className={className}
      >
        <>
          <SheetHeader>
            <SheetTitle>{headerTitle}</SheetTitle>
            <SheetDescription>{headerDescription}</SheetDescription>
          </SheetHeader>
          {children}
        </>
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
