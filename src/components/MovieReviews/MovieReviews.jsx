import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../service/API';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        setStatus('loading');
        const result = await fetchMovieReviews(movieId);
        setReviews(result);
        setStatus('resolved');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };
    movieReviews();
  }, [movieId]);

  if (status === 'loading') {
    return <p>Loading reviews...</p>;
  }

  if (status === 'error') {
    return <p>Failed to fetch reviews. Please try again later.</p>;
  }

  if (status === 'resolved' && reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
          <a href={review.url} target="_blank" rel="noopener noreferrer">
            Read full article...
          </a>
        </div>
      ))}
    </div>
  );
}

export default MovieReviews;
