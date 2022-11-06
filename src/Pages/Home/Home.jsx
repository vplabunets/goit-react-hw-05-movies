import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/apithemoviedb';
import imageplaceholders from 'utils/placeholders';
import { MoviesWrap } from 'Pages/Movies/Movies.styled';
import { NavItem, MoviesList, MoviesItem, MoviesImg } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => setTrendingMovies(data.results));
  }, []);

  return (
    <MoviesWrap>
      <h2>Trending today</h2>
      <MoviesList>
        {trendingMovies.map(film => (
          <MoviesItem key={film.id}>
            <NavItem
              id={film.id}
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <MoviesImg
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    : imageplaceholders.movieImgPlacholder
                }
                alt={film.original_title}
              ></MoviesImg>
              {film.title}{' '}
            </NavItem>
          </MoviesItem>
        ))}
      </MoviesList>
    </MoviesWrap>
  );
};

export default Home;
