import { NavBarMenu } from "../ui/navbar-menu";
import { Suspense } from "react";
import { FaHamburger, FaUser } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import Drawer from "./drawer";
import UserButton from "../auth/user-button";
import { FaCartShopping } from "react-icons/fa6";
import { getCart } from "@/data/cart";
import CartCounterBadge from "../cart/cartCounterBadge";

const Navbar = async() => {
  const session = await auth()
  const user = session?.user;
  var carts =await getCart(user?.id as string);
  const role = user?.role;
  const menuContent=(
    <>
        <Link className="hover:text-accent p-4" href="/shop">
          shop
        </Link>
        <Link className="hover:text-accent p-4" href="/product">
         Product
        </Link>
        <Link className="hover:text-accent p-4" href="/about">
          About
        </Link>
       {!user && <Link className="hover:text-accent p-4" href="/login">
          Login
        </Link>}
        {user && 
        <>
        <Link className="hover:text-accent p-4" href="/settings">
          Setting
        </Link>
       { role==="ADMIN" && <Link className="hover:text-accent p-4" href="/admin/dashboard">
          Admin
        </Link>}
        </>
        }
        </>
  )
  const navBrand =(
    <Drawer side="left" asChild trigger={<div><Button size="icon" radius="full" variant="ghost"><FaHamburger/></Button>Sandesh Collection</div>}>
       <div  className="flex items-start justify-between flex-col py-10 pr-4">      
        {menuContent}
       </div>
    </Drawer>
  )
  return (
   <NavBarMenu navBrand={navBrand}>
      <div  className="flex justify-between items-center">
       <div className="hidden md:flex items-center justify-between">
          {menuContent}
        </div>
        {user && <Link href="/cart" className="d-center">
          <CartCounterBadge id={user.id as string} >
            <FaCartShopping className="size-4 mr-4" />
          </CartCounterBadge>
        </Link>}
        <Suspense fallback={<FaUser className="size-4" />}>
          {user && <UserButton user={user} cart={carts} />}
        </Suspense>
      </div>
   </NavBarMenu>
  );
};

export default Navbar;
