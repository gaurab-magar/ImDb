import HeroSection from "./Components/HeroSection";
import ResultMap from "./Components/ResultMap";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';
  const endpoint = genre === 'fetchTopRated'
    ? '/movie/top_rated'
    : genre === 'fetchUpcoming'
    ? '/movie/upcoming'
    : genre === 'fetchPopular'
    ? '/movie/popular'
    : '/trending/all/week';

  try {
    // const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
    const res = await fetch(`https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
      // data.results = data.results.slice(0,6);

    return (
      <main>
        <div>
          <HeroSection />
            <ResultMap results={data.results} genre={genre} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <main>
        <div>
          <h2>Oops! Something went wrong while fetching data.</h2>
        </div>
      </main>
    );
  }
}
