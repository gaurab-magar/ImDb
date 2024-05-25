'use client'
import React from 'react'
import { motion } from 'framer-motion';
const page = () => {
  const pageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <section className="dark:text-white text-gray-600 body-font mt-32">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 light:text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p className="leading-relaxed text-base dark:text-black">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p className="leading-relaxed text-base dark:text-black">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
    </motion.div>
)
}

export default page