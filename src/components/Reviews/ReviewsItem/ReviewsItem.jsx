import { AuthorName, Comment } from './ReviewsItem.styled';

export const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <AuthorName>Author: {author}</AuthorName>
      <Comment>{content}</Comment>
    </li>
  );
};
