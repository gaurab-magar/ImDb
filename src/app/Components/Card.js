'use client'
import Link from 'next/link'
import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa6";
import Image from 'next/image';
import { motion } from 'framer-motion';


const Card = ({result}) => {
  return (
      <Link href={`/movie/${result.id}`}>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ 
                visible: { scale: 1, opacity: 1 }, 
                hidden: { scale: 0.8, opacity: 0
                } }}
        >
        <div className="overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-200">
                    <Image className="p-2 rounded-2xl hover:scale-110 duration-200" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt="product image" height={200} width={500}/>
                <div className="px-5 pb-5">
                        <p className="text-xl font-semibold tracking-tight my-2 text-gray-900 dark:text-white truncate">{result.name || result.original_name || result.original_title || result.original_title || 'Missing title'}</p>
                        <p className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-3">{result.overview}</p>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{result.popularity}</span>
                    </div>
                    <div className="flex flex-col justify-start">
                        <span className="text-sm font-bold text-gray-900 dark:text-white"> Release Date: <span className='text-xs ml-2 text-blue-600 font-light'> {result.release_date}</span> </span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white"> Media type: <span className='text-xs ml-2 text-blue-600 font-light'> {result.media_type}</span> </span>
                    </div>
                    <div className='flex items-center justify-center float-right m-2'>
                        <FaRegThumbsUp className='mr-2 cursor-pointer' />
                        <p>{result.vote_count}</p>
                    </div>
                </div>
        </div>
    </motion.div>
    </Link>
  )
}

export default Card