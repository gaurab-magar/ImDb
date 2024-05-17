'use client'
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';

const DarkMode = () => {
    const { theme , setTheme , systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
        {
            currentTheme === 'dark' ? 
                <MdDarkMode onClick={() => setTheme('light')} className="text-2xl cursor-pointer" />
                :
                <MdLightMode onClick={() => setTheme('dark')} className="text-2xl cursor-pointer" />
                
        }
    </div>
  )
}

export default DarkMode;