// import React from 'react'

// const api = ({data}) => {
   
//   return (
//     <div>
//         <h1>{data.title}</h1>
//     </div>
//   )
// }
// export async function getStaticProps() {
//     const apiKey = process.env.API_SECRET_KEY;
//     const apiUrl = process.env.API_URL;
  
//     const response = await fetch(`${apiUrl}/movie/${apiKey}`);
//     const data = await response.json();
  
//     return {
//       props: {
//         data,
//       },
//     };
//   }

// export default api