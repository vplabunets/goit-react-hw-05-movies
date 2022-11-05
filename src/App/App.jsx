import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Layout from '../components/Layout/Layout';
import AppWrap from './App.styled';

export const App = () => {
  return (
    <AppWrap>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </AppWrap>
  );
};
