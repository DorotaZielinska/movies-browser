import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "5d7b278fff9e1056c09e514d9f0bc9f3";

export const getMovieDetails = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};

export const getMovieCredits = async ({ movieId }) => {
  const response = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const getPopularMovies = async (page) => {
  const response = await axios.get(
    `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return await response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return await response.data.genres;
};
