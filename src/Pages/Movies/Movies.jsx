import React from 'react';
import { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

  console.log(byNameMovies);
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
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                  alt={film.title}
                />
                {film.title}
              </Link>
            </li>
          ))}
      </ByNameMovieList>
      <Outlet />
    </>
  );
};

//   <Carousel>
//     images={byNameMovies.map(film => ({
//       src: `https://image.tmdb.org/t/p/w500/${film.poster_path}`,
//     }))}
//   >
//     {byNameMovies.map(film => (
//       <Link
//         key={film.id}
//         to={`/goit-react-hw-05-movies_2/movies/${film.id}`}
//         state={{ from: location }}
//       ></Link>
//     ))}
//   </Carousel>
// )
// <Carousel>
//   {byNameMovies.map(film => (
//     <div key={film.id}>
//       <Link
//         id={film.id}
//         to={`/goit-react-hw-05-movies_2/movies/${film.id}`}
//         state={{ from: location }}
//       >
//         <a href={`/goit-react-hw-05-movies_2/movies/${film.id}`}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
//             alt={film.title}
//           />
//         </a>
//         {/* {film.title}{' '} */}
//       </Link>
//     </div>
//   ))}
// </Carousel>
// )}
