import ResultMap from "./Components/ResultMap";

export default async function Home() {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&amp;language=en-US&amp;page=1`);

    const data = await response.json()
    console.log(data)
    return(
      <div className="container">
         <ResultMap results={data.results} />
      </div>
    )
  }catch(error){
    console.log(error)
  }
return(
  <div>
    <h2>Oops! Something went wrong while fetching data.</h2>
  </div>
)
  }
