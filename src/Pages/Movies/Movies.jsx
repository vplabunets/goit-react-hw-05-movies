import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'api/apithemoviedb';
import {
  Button,
  MovieForm,
  MovieInput,
  ByNameMovieList,
} from './Movies.styled';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [byNameMovies, setByNameMovies] = useState(null);
  const [query, setQuery] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.filmName.value);
    setSearchParams({ queryParam: e.currentTarget.elements.filmName.value });
    e.target.reset();
  };

  // console.log(searchParams.get('queryParam'));

  // if (searchParams.get('queryParam') !== '') {
  //   setQuery(searchParams.get('queryParam'));
  //   console.log(query);
  // }

  useEffect(() => {
    if (!query) {
      return;
    }
    // if (searchParams.get('queryParam') !== '') {
    //   setQuery(searchParams.get('queryParam'));
    // }
    getMoviesByName(query).then(({ data }) => setByNameMovies(data.results));
  }, [query, searchParams]);
  return (
    <>
      <div>
        <MovieForm onSubmit={handleSubmit}>
          <MovieInput name="filmName"></MovieInput>
          <Button type="submit"> Search</Button>
        </MovieForm>
      </div>
      <ByNameMovieList>
        {byNameMovies &&
          byNameMovies.map(film => (
            <li key={film.id}>
              <Link
                id={film.id}
                to={`/vplabunets.github.io/goit-react-hw-05-movies_2/movies/${film.id}`}
                state={{ from: location }}
              >
                {film.title}{' '}
              </Link>
            </li>
          ))}
      </ByNameMovieList>
      <Outlet />
    </>
  );
};
