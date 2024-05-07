import { useEffect, useState } from 'react';
import { fetchMovies } from '../service/API';

import MovieList from '../components/MovieList/MovieList';
function HomePage() {
  const [todayMovies, setTodayMovies] = useState([]);

  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        const result = await fetchMovies();
        setTodayMovies(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodayMovies();
  }, []);
  console.log(todayMovies)
  return (
    <div>
  
      <MovieList movies={todayMovies} />
    </div>
  );
}

export default HomePage;
