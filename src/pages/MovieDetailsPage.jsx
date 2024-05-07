import { fetchMovieDescription } from '../service/API';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function MovieDetailsPage() {
  const [movieDescription, setMovieDescription] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        setStatus(STATUS.IDLE);
        const result = await fetchMovieDescription(movieId);
        setMovieDescription(result);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        console.error(error);
      }
    };
    fetchDescription();
  }, [movieId]);

  if (status === STATUS.REJECTED) {
    return <p>Error fetching movie description.</p>;
  }

  if (status === STATUS.IDLE || !movieDescription) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to={backLinkHref.current}>Go Back</Link>
      <div style={{ display: 'flex', margin: '20px 0' }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDescription.poster_path}`}
          alt={movieDescription.title}
          style={{ marginRight: '20px' }}
        />
        <div>
          <h1>{movieDescription.title}</h1>
          <p>User Score: {movieDescription.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movieDescription.overview}</p>
          <h2>Genres</h2>
          <p>{movieDescription.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
