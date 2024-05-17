import React from 'react'
import Card from './Card'

const ResultMap = ({results}) => {
  return (
    <div>
        {results.map((result, index) => (
            <Card key={index} result={result} />
            ))}
    </div>
  )
}

export default ResultMap