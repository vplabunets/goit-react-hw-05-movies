import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'api/apithemoviedb';
import { BiArrowBack } from 'react-icons/bi';
import imageplaceholders from 'utils/placeholders';
import {
  MovDetails,
  MovInfo,
  GoBackBtn,
  GoBackBtnText,
  MovImg,
  MovText,
  NavItem,
  AddInfoBox,
  AddInfoTitle,
} from './MovieDetails.styled';
import LayoutBox from 'components/Layout/Layout.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    getMovieDetails(params.movieId).then(({ data }) => setMovieDetails(data));
  }, [params.movieId]);

  return (
    <>
      <GoBackBtn to={location.state?.from ?? '/'}>
        <BiArrowBack />
        <GoBackBtnText>Go Back</GoBackBtnText>
      </GoBackBtn>
      {movieDetails && (
        <MovDetails>
          <MovImg
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : imageplaceholders.movieImgPlacholder
            }
            alt={movieDetails.original_title}
            width="215"
            height="320"
          ></MovImg>
          <MovInfo>
            <h2>{movieDetails.original_title}</h2>
            <MovText>User Score: {movieDetails.vote_average * 10} %</MovText>
            <h3>Overview</h3>
            <MovText>{movieDetails.overview}</MovText>
            <h4>Genres</h4>
            <MovText>
              {movieDetails.genres.map(genre => genre.name).join(' ')}
            </MovText>
          </MovInfo>
        </MovDetails>
      )}
      <LayoutBox>
        <AddInfoBox>
          <AddInfoTitle>Additional Information</AddInfoTitle>
          <NavItem id={params.movieId} to={`cast`}>
            Cast
          </NavItem>
          <NavItem id={params.movieId} to={`reviews`}>
            Review
          </NavItem>
        </AddInfoBox>
        <Outlet />
      </LayoutBox>
    </>
  );
};

export default MovieDetails;
