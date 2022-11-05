import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/apithemoviedb';
import LayoutBox from 'components/Layout/Layout.styled';
export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const params = useParams();
  useEffect(() => {
    getMovieReviews(params.movieId).then(({ data }) =>
      setMovieReviews(data.results)
    );
  }, [params.movieId]);

  return (
    <LayoutBox>
      {!movieReviews ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </LayoutBox>
  );
};
