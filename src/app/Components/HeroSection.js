'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const HeroSection = () => {
    const [Hero , setHero] = useState([]);

    useEffect(()=>{
        fetch('/hero.json')
        .then(response => response.json())
        .then(data => setHero(data))
        .catch(error => console.error('Error fetching hero data:', error));

    },[])

  return (
    <Swiper
        direction={'vertical'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className=' mySwiper h-96  lg:h-96  overflow-hidden '>
            {
            Hero.map((item)=>(
                <SwiperSlide key={item.id}>
                    <div key={item.id} id={item.id} className="h-96">
                        <Image src={item.image} alt={item.name} width={400} height={200} className='w-full h-full object-cover object-center relative' />
                        <h2 className='absolute left-7 top-52 text-blue-700 text-3xl font-bold z-20'>{item.name}</h2>
                        <p className='absolute left-7 top-64 text-blue-500 text-xl font-semibold w-1/3 z-20'>{item.description}</p>
                        <div className="absolute inset-0 bg-gray-900 opacity-60 z-10">
                            <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
                                <h2 className='text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl'>Discover the best movies</h2>
                                <p className='text-white text-xs md:text-lg'>Search and explore a vast collection of movies, TV shows, and more.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default HeroSection