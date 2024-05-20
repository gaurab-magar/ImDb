'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';


const SecondNavbar = () => {
    const searchParams = useSearchParams();
    const [genre , setGenre] = useState(null);

    useEffect(()=>{
        const genreParam = searchParams.get('genre');
        setGenre(genreParam);
    },[searchParams])

  return (
    <div className='fixed top-[4.5rem] left-0 w-full z-40 flex backdrop-blur bg-gray-300 bg-opacity-70 shadow-lg p-4 justify-center gap-4 font-semibold text-white'>
       
        <Link href="/?genre=fetchTrending">
                <p className={`hover:text-gray-400 ${genre === 'fetchTrending' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-300 ease-in-out' : ''}`}>
                    Trending
                </p>
        </Link>
        <Link href="/?genre=fetchTopRated">
                <p className={`hover:text-gray-400 ${genre === 'fetchTopRated' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-300 ease-in-out' : ''}`}>
                    Top Rated
                </p>
        </Link>
        <Link href="/?genre=fetchUpcoming">
                <p className={`hover:text-gray-400 ${genre === 'fetchUpcoming' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-300 ease-in-out' : ''}`}>
                    upcoming
                </p>
        </Link>
        <Link href="/?genre=fetchPopular">
                <p className={`hover:text-gray-400 ${genre === 'fetchPopular' ? 'underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg text-gray-500 transition-all duration-300 ease-in-out' : ''}`}>
                    Popular
                </p>
        </Link>
    </div>
  )
}
const SecondNavbarWrapper = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <SecondNavbar />
    </Suspense>
);
export default SecondNavbarWrapper;