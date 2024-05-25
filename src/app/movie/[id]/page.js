import MovieDetail from '@/app/Components/MovieDetail';
import SearchBox from '@/app/Components/SearchBox';
import React from 'react';


export default async function page ({params}) {
    const movieId = params.id;
    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
  return (
    <>
    <MovieDetail movie={movie} />
    </>
  )
}
