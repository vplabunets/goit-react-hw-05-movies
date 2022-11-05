import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Movies } from '../Pages/Movies/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MovieDetails } from '../Pages/MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/goit-react-hw-05-movies_2" element={<Home />} />
          <Route
            path="/goit-react-hw-05-movies_2/movies"
            element={<Movies />}
          />
          <Route>
            <Route
              path="/goit-react-hw-05-movies_2/movies/:movieId"
              element={<MovieDetails />}
            >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
