import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../UI/Layout/Layout';
import AppWrap from './App.styled';

const Home = lazy(() => import('../../pages1/Home/Home'));
const Movies = lazy(() => import('../../pages1/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages1/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
