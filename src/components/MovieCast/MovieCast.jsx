import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../service/API';

const DEFAULT_IMAGE = 'https://via.placeholder.com/100';

function MovieCast() {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setStatus('loading');
        const result = await fetchMovieCast(movieId);
        setCast(result);
        setStatus('resolved');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };
    fetchCast();
  }, [movieId]);

  if (status === 'loading') {
    return <p>Loading cast...</p>;
  }

  if (status === 'error') {
    return <p>Failed to fetch cast. Please try again later.</p>;
  }

  if (status === 'resolved' && cast.length === 0) {
    return <p>No cast information available for this movie.</p>;
  }

  return (
    <div>
      {cast.map(member => (
        <div key={member.id} style={{ marginBottom: '20px' }}>
          <img
            src={member.profile_path ? `https://image.tmdb.org/t/p/w300${member.profile_path}` : DEFAULT_IMAGE}
            alt={member.name}
            width="100"
          />
          <p>{member.name}</p>
          <p>Character: {member.character}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieCast;
