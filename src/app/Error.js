'use client'

import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
    useEffect(()=>{
        document.title=`Error:${error.message}`;
        return()=>document.title='Movie Error';
    },[error])
  return (
    <div>
        <h1>{error.message}</h1>
        <button onClick={()=>reset()} className='px-3 text-white bg-black rounded-md'>Try again</button>
    </div>
  )
}

export default Error