"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "./link";
import { usePathname } from "next/navigation";
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
  className
}: {
  setActive: (item: string) => void;
  active: string | null;
  item?: string;
  href?:string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const MotionLink = motion(Link);
  return (
    <div onMouseEnter={() => setActive(href || item as string)} className="w-full">
      {href ? (
        <MotionLink transition={{ duration: 0.3 }} href={href} className={cn(
          `cursor-pointer bg-transparent text-foreground ${href === pathname && "bg-accent"} space-x-0 flex items-center justify-between p-2 px-4 hover:opacity-[0.9] rounded-full w-full`,
          className
          )} >
          {children}
        </MotionLink>
      ):(
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-foreground hover:opacity-[0.9] "
      >
        {item}
      </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-background backdrop-blur-sm rounded-2xl overflow-hidden border dark:border-foreground/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?:string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn("relative rounded-full shadow-input flex justify-center px-8 py-2 ",
                    className)}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-background ">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// export const HoveredLink = ({ children, ...rest }: any) => {
//   return (
//     <Link
//       {...rest}
//       className="text-neutral-700 dark:text-neutral-200 hover:text-background "
//     >
//       {children}
//     </Link>
//   );
// };

export const NavBarMenu = ({
  navItems,
  navBrand,
  brandurl,
  children,
  className,
}: {
  navBrand?: React.ReactNode;
  brandurl?: string;
  children?: React.ReactNode;
  navItems?: {
    name?: string;
    link?: string;
    element?:React.ReactNode,
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(true);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  
  return (<>
    <div className="fixed top-0 inset-x-0 max-w-screen-md w-full h-1 bg-background backdrop-blur-md border-b rounded-full mx-auto" onMouseEnter={()=>setVisible(true)}/>
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        
        className={cn(
          "flex max-w-fit d-center sticky top-2 px-2 inset-x-0 mx-auto border border-transparent rounded-full bg-background backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[50] pr-2 pl-8 items-center justify-between space-x-4",
          className
        )}
      >
        {navBrand && <Link href={brandurl || "#"}>{navBrand}</Link>}
        {navItems?.map((navItem: any, idx: number) => (
          <>
          {navItem?.element && navItem?.element}
          {navItem?.name && <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative  items-center flex space-x-1 text-neutral-600  hover:text-neutral-90 border-b hover:border-neutral-400",
              navItem.active && "text-neutral-900"
              )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>}
          </>
        ))}
        {children}
      </motion.div>
    </AnimatePresence>
    </>
  );
};