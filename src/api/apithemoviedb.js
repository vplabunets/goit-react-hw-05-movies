import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function getTrendingMovies() {
  try {
    const response = await axios.get('3/trending/movie/day', {
      params: {
        api_key: '74bfe718a55ac7916c6e6ad87b15f944',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesByName(query) {
  try {
    const response = await axios.get('3/search/movie', {
      params: {
        query: query,
        api_key: '74bfe718a55ac7916c6e6ad87b15f944',
        language: 'en-US',
        page: 1,
        include_adult: false,
      },
    });
    if (response.data.results.length === 0) {
      toast.error('Please input correct query');
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(`3/movie/${movie_id}`, {
      params: {
        api_key: '74bfe718a55ac7916c6e6ad87b15f944',
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(movie_id) {
  try {
    const response = await axios.get(`3/movie/${movie_id}/credits`, {
      params: {
        api_key: '74bfe718a55ac7916c6e6ad87b15f944',
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(movie_id) {
  try {
    const response = await axios.get(`3/movie/${movie_id}/reviews`, {
      params: {
        api_key: '74bfe718a55ac7916c6e6ad87b15f944',
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
