import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/apithemoviedb';
import { BiArrowBack } from 'react-icons/bi';
import { MovDetails, MovInfo, GoBackBtn } from './MovieDetails.styled';
import LayoutBox from 'components/Layout/Layout.styled';
const img = 'https://via.placeholder.com/200x200/258DC8/E0F6FD';
export const MovieDetails = () => {
  // const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMovieDetails(params.movieId).then(({ data }) => setMovieDetails(data));
  }, [params.movieId]);
  return (
    <>
      {/* to={location.state.from} */}
      <GoBackBtn>
        <BiArrowBack />
        Go Back
      </GoBackBtn>
      {movieDetails && (
        <MovDetails>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : img
            }
            alt={movieDetails.original_title}
            width="200"
          ></img>
          <MovInfo>
            <h2>{movieDetails.original_title}</h2>
            <p>User Score: {movieDetails.vote_average * 10} %</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4>Genres</h4>
            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
          </MovInfo>
        </MovDetails>
      )}
      <LayoutBox>
        <h5>Additional Information</h5>
        <Link id={params.movieId} to={`cast`}>
          Cast
        </Link>
        <br />
        <Link id={params.movieId} to={`reviews`}>
          Review
        </Link>
      </LayoutBox>
      <Outlet />
    </>
  );
};
