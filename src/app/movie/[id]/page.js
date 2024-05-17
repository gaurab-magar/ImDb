// import fetchData from '../../api';
// import React from 'react'

// export async function getServerSideProps(context){
//     const {id} = context.params;
//     try{
//         const movie = await fetchData(id);
//         return {
//             props: {movie}
//         }
//     }catch(error){
//         console.log(error)
//     }
// }


// const page = ({movie}) => {
//     console.log('movieid',movie.id)
//   return (
//     <div>
//         <h1>{movie.title}</h1>
//     </div>
//   )
// }

// export default page