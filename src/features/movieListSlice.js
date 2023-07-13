import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "./getDataApi";
const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    status: "loading",
    page: 3,
    totalPage: 0,
  },
  reducers: {
    // fetchMoviesList: (state, { payload: movies }) => {
    //   state.movies = movies.data.results;
    //   state.genres = movies.genres;
    //   state.status = "success";

    // },

    fetchMoviesListSuccess: (state, { payload }) => {
      state.movies = payload.data.results;
      state.genres = payload.genres;
      state.status = "success";
      // state.page = payload.currentPage;
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    firstPage: (state) => {
      state.page = 1;
    },
    lastPage: (state, { payload: currentPage }) => {
      state.page = currentPage = 500;
    },
    nextPage: (state, { payload: currentPage }) => {
      state.page = currentPage + 1;
      // getPopularMovies(currentPage);
    },
    previousPage: (state, { payload: currentPage }) => {
      state.page = currentPage - 1;
    },
  },
});
export const {
  fetchMoviesList,
  fetchMoviesListError,
  fetchMoviesListSuccess,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
} = moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesListState(state).page;

export default moviesListSlice.reducer;
