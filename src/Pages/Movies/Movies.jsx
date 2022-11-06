import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'api/apithemoviedb';
import imageplaceholders from 'utils/placeholders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Button,
  CarouselWrap,
  MovieForm,
  MovieInput,
  MoviesWrap,
} from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [byNameMovies, setByNameMovies] = useState(null);
  const [query, setQuery] = useState(null);

  const handleSubmit = e => {
    if (e.currentTarget.elements.filmName.value === '') {
      alert('Please input correct query');
    }
    e.preventDefault();
    setQuery(e.currentTarget.elements.filmName.value);
    setSearchParams({ queryParam: e.currentTarget.elements.filmName.value });
    e.target.reset();
  };
  const search = searchParams.get('queryParam') ?? null;
  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }

    getMoviesByName(query).then(({ data }) => setByNameMovies(data.results));
  }, [query, searchParams, search]);
  return (
    <MoviesWrap>
      <div>
        <MovieForm onSubmit={handleSubmit}>
          <MovieInput name="filmName"></MovieInput>
          <Button type="submit"> Search</Button>
        </MovieForm>
      </div>
      <div>
        {query && (
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        )}
      </div>
      {byNameMovies && (
        <CarouselWrap>
          <Carousel width={400} dynamicHeight={true} verticalSwipe={'natural'}>
            {byNameMovies.map(film => (
              <Link
                key={film.id}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                <div id={film.id}>
                  <img
                    width={500}
                    height={600}
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                        : imageplaceholders.movieImgPlacholder
                    }
                    alt={film.title}
                  />
                  <p className="legend">{film.title}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </CarouselWrap>
      )}
      <Outlet />
    </MoviesWrap>
  );
};

export default Movies;
