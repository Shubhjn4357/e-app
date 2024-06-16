'use client'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { LogoutButton } from "./logout-button";
import ThemeSwitch from "../themeSwitch";
import { ExtendedUser } from "@/types/next-auth";
import { Cart } from "@prisma/client";
const UserButton = ({user,cart}:{user:ExtendedUser,cart:Cart[]}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-gradient">
            <FaUser className="size-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[40px]" align="end">
        <DropdownMenuItem>
          <FaCartShopping className="size-4 mr-4" />
          Cart
          <span className="text-sm font-bold rounded-full bg-destructive px-2 ml-2">{cart.length}</span>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <ThemeSwitch/>
          DarkMode
        </DropdownMenuItem>
        {user && <LogoutButton>
          <DropdownMenuItem>
            <IoExitOutline className="size-4 mr-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserButton