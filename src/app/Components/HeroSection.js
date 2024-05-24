'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import HeroWrap from './HeroWrap';

const HeroSection = () => {
    const [Hero , setHero] = useState([]);

    useEffect(()=>{
        fetch('/hero.json')
        .then(response => response.json())
        .then(data => setHero(data))
        .catch(error => console.error('Error fetching hero data:', error));

    },[])

  return (
    <section className='mt-32 relative w-full'>
        <div className='absolute w-full z-30'>
        <div className="absolute inset-0 bg-gray-950 opacity-70"></div>
            <HeroWrap />
        </div>
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
                            <h2 className='hidden md:block absolute left-7 top-52 text-xs md:text-3xl text-white font-bold '>{item.name}</h2>
                            <p className='hidden md:block absolute left-7 top-64  text-xs md:text-xl text-white font-semibold w-1/3 '>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default HeroSection