import { useTheme } from 'next-themes';
import React from 'react'
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from "lucide-react";
const ThemeSwitch = ({ label}:{label?:boolean}) => {
     const {theme,setTheme} = useTheme();
  const toggeleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button variant="ghost" className="p-0 flex h-auto" onClick={toggeleTheme}>
      <>
      {theme === "light" ? <SunIcon className="size-4 mr-4" /> : <MoonIcon className="size-4 mr-4" />}{label && (theme === "light" ? "DarkMode" : "LightMode")}
      </>
    </Button>
  )
}

export default ThemeSwitch