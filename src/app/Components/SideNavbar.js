import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SideNavbar = ({isOpen,setIsopen}) => {
  return (
    
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-64 backdrop-blur bg-white bg-opacity-90 shadow-lg"
        >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                    type="button"
                    className="text-gray-500 hover:text-red-800 focus:outline-none focus:text-gray-800"
                    onClick={() => {
                    setIsopen(false);
                    }}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </div>
                <nav className="py-4">
                <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/" className="block text-gray-800">Home</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/about" className="block text-gray-800">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/service" className="block text-gray-800">Service</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/contact" className="block text-gray-800">Contact</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/" className="block text-gray-800">TV Shows</Link>
                    </li>
                </ul>
                </nav>
        </motion.div>
  )
}

export default SideNavbar