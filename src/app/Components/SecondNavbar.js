'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';


const SecondNavbar = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div className='flex backdrop-blur bg-gray-300 bg-opacity-70 shadow-lg p-4 justify-center gap-4 font-semibold text-white'>
       
        <Link href="/?genre=fetchTrending">
                <p className={`hover:text-gray-400 ${genre === 'fetchTrending' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-200' : ''}`}>
                    Trending
                </p>
        </Link>
        <Link href="/?genre=fetchTopRated">
                <p className={`hover:text-gray-400 ${genre === 'fetchTopRated' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-200' : ''}`}>
                    Top Rated
                </p>
        </Link>
        <Link href="/?genre=fetchUpcoming">
                <p className={`hover:text-gray-400 ${genre === 'fetchUpcoming' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-200' : ''}`}>
                    upcoming
                </p>
        </Link>
        <Link href="/?genre=fetchPopular">
                <p className={`hover:text-gray-400 ${genre === 'fetchPopular' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-200' : ''}`}>
                    Popular
                </p>
        </Link>
    </div>
  )
}

export default SecondNavbar;