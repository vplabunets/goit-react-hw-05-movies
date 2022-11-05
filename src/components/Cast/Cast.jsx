import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/apithemoviedb';
import LayoutBox from 'components/Layout/Layout.styled';
import { CastList, ActorPicture } from './Cast.styled';
const img =
  'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png';
const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const params = useParams();
  useEffect(() => {
    getMovieCast(params.movieId).then(({ data }) => setMovieCast(data.cast));
  }, [params]);

  return (
    <LayoutBox>
      {movieCast.length === 0 ? (
        'There is no cast'
      ) : (
        <CastList>
          {movieCast.map(actor => (
            <li key={actor.id}>
              <ActorPicture
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : img
                }
                alt={actor.original_name}
              ></ActorPicture>
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </CastList>
      )}
    </LayoutBox>
  );
};

export default Cast;
