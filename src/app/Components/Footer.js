import Link from 'next/link'
import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl font-semibold dark:text-white">G-Movie</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 copyright by
      <Link href={"https://www.facebook.com/people/Gaurab-Magar/pfbid0z4D6SK4knfrboCuSmzQi95MoxvHtAMsndPgVCxBh9DsQmRX9Dgkzeyam6yuwr1fbl"}  target="_blank" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@gaurab magar</Link>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.facebook.com/people/Gaurab-Magar/pfbid0z4D6SK4knfrboCuSmzQi95MoxvHtAMsndPgVCxBh9DsQmRX9Dgkzeyam6yuwr1fbl"}  target="_blank" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link  href={'https://www.instagram.com/gaurab_7o77?igsh=MWQ3YnFkbG5maTN2dA%3D%3D&utm_source=qr '}  target="_blank" className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
      <Link href={'mailto:gdikshan10@gmail.com'} className="ml-3 text-2xl text-gray-500">
        <MdOutlineAttachEmail />
      </Link>
    </span>
  </div>
</footer>
  )
}

export default Footer