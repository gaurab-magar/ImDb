'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const SearchBox = () => {
    const [results ,setResults] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(results)
        router.push(`/search/${results}`)
        setResults('');
    }
  return (
    <motion.form
        initial={{scale:0.5,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.5}}}
    onSubmit={handleSubmit}  className=" flex items-center max-w-sm mx-auto m-4 px-4">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="w-full">
                <input value={results} onChange={(e)=>{setResults (e.target.value)}}  type="text" id="simple-search" className="outline-none bg-gray-50  text-gray-900 text-[12px] rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
            </div>
            <button    type="submit" className="disabled:bg-gray-300 p-2.5 ms-2 text-sm font-medium text-white bg-blue-200 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
    </motion.form>
  )
}

export default SearchBox