import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../service/API';
import { ReviewsList } from './ReviewsList/ReviewsList';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const movieReviews = async () => {
      try {
        const result = await fetchMovieReviews(movieId);
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviews();
  }, [movieId]);
  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
