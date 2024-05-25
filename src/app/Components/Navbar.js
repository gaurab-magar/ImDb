'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import DarkMode from './DarkMode';
import { SiThemoviedatabase } from "react-icons/si";
import SideNavbar from './SideNavbar';




const Navbar = () => {
    const [isOpen , setIsopen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900  z-50 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
    <Link href="/" className="flex items-center space-x-3 ">
            <SiThemoviedatabase className='text-3xl' />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chami</span>
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0">
      <div className='flex items-center justify-center mx-2'>
        <DarkMode />
      </div>
      
        <button type="button" className="font-medium"><FaUserCircle className='text-2xl' /></button>
        <button onClick={()=>setIsopen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
    </div>
    {
      isOpen && <SideNavbar isOpen={isOpen} setIsopen={setIsopen} />
    }
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          
          <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
        </li>
        <li>
          <Link href="/service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
        </li>
      </ul>
    </div>
    </div>
</nav>
  )
}

export default Navbar