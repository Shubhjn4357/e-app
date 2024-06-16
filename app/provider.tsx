import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import React from 'react'
const Provider = ({children,session}: SessionProviderProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
            {children}
        </TooltipProvider>
        </ThemeProvider>
    </SessionProvider>
  )
}

export default Provider