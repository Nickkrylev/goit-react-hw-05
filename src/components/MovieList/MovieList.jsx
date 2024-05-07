
import MovieItem from '../MovieItem/MovieItem';
function MovieList({ movies }) {
  console.log(movies)
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
