'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AuthAnimation = ({children}) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0, y: 50 }}
    >
        {children}
    </motion.div>
  )
}

export default AuthAnimation