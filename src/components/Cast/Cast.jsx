import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/apithemoviedb';
import imageplaceholders from 'utils/placeholders';
import { Loader } from 'utils/Loader/Loader';
import LayoutBox from 'components/Layout/Layout.styled';
import { CastList, ActorPicture, CastText } from './Cast.styled';

const Cast = () => {
  const [isLoadingCast, setIsLoadingCast] = useState(true);
  const [movieCast, setMovieCast] = useState([]);
  const params = useParams();
  useEffect(() => {
    setIsLoadingCast(true);
    getMovieCast(params.movieId).then(({ data }) => setMovieCast(data.cast));
    setTimeout(setIsLoadingCast(false), 10000);
  }, [params]);

  return (
    <LayoutBox>
      {isLoadingCast && <Loader />}
      {movieCast.length === 0 ? (
        <CastText>There is no cast</CastText>
      ) : (
        <CastList>
          {movieCast.map(actor => (
            <li key={actor.id}>
              <ActorPicture
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : imageplaceholders.actorImgPlacholder
                }
                alt={actor.original_name}
              ></ActorPicture>
              <CastText>{actor.original_name}</CastText>
              <CastText>Character: {actor.character}</CastText>
            </li>
          ))}
        </CastList>
      )}
    </LayoutBox>
  );
};

export default Cast;
