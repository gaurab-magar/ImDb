import React from 'react'
import Card from './Card'

const ResultMap = ({results}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-5'>
        {results.map((result, index) => (
            <Card key={index} result={result} />
            ))}
    </div>
  )
}

export default ResultMap