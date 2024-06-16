"use server";
import React from "react";
import {
  PanelLeft,
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
} from "lucide-react";
import { Button } from "../ui/button";
import Drawer from "../nav/drawer";
import { Link } from "../ui/link";

const SidebarToggler = () => {
  const MenuItem = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: Users2,
    },
  ];
  return (
    <Drawer
      trigger={
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      }
      footer={
        <Link
          href="/settings"
          className="flex items-center justify-start  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          <LineChart className="size-5 transition-all group-hover:scale-110" />
          Settings
        </Link>
      }
      asChild
      side="left"
    >
      <nav className="grid gap-6 text-lg font-medium">
        <Link
          href="/"
          className="group flex p-2 h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
        >
          <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Sandesh Collection</span>
        </Link>
        {MenuItem.map((item, key) => {
          return (
            <Link
              href={item.href}
              key={key}
              className="flex items-center justify-start gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <item.icon className="size-5 transition-all group-hover:scale-110" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </Drawer>
  );
};

export default SidebarToggler;
