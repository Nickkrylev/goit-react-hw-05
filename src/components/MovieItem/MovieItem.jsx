import { Link, useLocation } from 'react-router-dom';

function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
      <li>{movie.original_title}</li>
    </Link>
  );
}

export default MovieItem;

