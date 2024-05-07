import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

export const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <h2>No reviews for this movie.</h2>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return <ReviewsItem key={id} author={author} content={content} />;
      })}
    </ul>
  );
};
