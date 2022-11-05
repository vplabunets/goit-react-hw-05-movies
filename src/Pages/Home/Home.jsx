import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/apithemoviedb';
export const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => setTrendingMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(film => (
          <li key={film.id}>
            <Link
              id={film.id}
              to={`/goit-react-hw-05-movies_2/movies/${film.id}`}
              state={{ from: location }}
            >
              {film.title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
