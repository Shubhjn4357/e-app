import { cn } from '@/lib/utils'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
export interface MenuItemProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  isIconOnly?: boolean;
  asChild?: boolean;
  variant?:
    | "primary"
    | "destructive"
    | "secondary"
    | "accent"
    | null
}
export const MenuItem = ({label,icon,variant="accent",isIconOnly=false,asChild=false}:MenuItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
          <span className={`flex gap-2`}>
            {icon}
            {!isIconOnly && label}
          </span>
      </TooltipTrigger>
      <TooltipContent className={`bg-${variant}`}>{label}</TooltipContent>
    </Tooltip>
  );
}

export const Menu = ({ children, className }: {children: React.ReactNode,className?: string }) => (
    <div className={cn(className)}>{children}</div>
)