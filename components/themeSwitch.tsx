import { useTheme } from 'next-themes';
import React from 'react'
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from "lucide-react";
const ThemeSwitch = () => {
     const {theme,setTheme} = useTheme();
  const toggeleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button asChild size="icon" variant="ghost" className="p-0" onClick={toggeleTheme}>{theme === "light" ? <SunIcon className="size-4 mr-4"/> : <MoonIcon className="size-4 mr-4"/>}</Button>
  )
}

export default ThemeSwitch