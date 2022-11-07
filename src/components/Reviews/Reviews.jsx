import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/apiTheMovieDb1';
import LayoutBox from 'components/UI/Layout/Layout.styled';
import { ReviewsText, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const params = useParams();
  useEffect(() => {
    getMovieReviews(params.movieId).then(({ data }) =>
      setMovieReviews(data.results)
    );
  }, [params.movieId]);
  return (
    <LayoutBox>
      {movieReviews.length === 0 ? (
        <ReviewsText>We don't have any reviews for this movie</ReviewsText>
      ) : (
        <ReviewsList>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <ReviewsText>{review.content}</ReviewsText>
            </li>
          ))}
        </ReviewsList>
      )}
    </LayoutBox>
  );
};

export default Reviews;
