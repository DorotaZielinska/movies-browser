import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    status: "loading",
    page: 1,
  },
  reducers: {
    fetchMoviesList: (state, { payload: movies }) => {
      state.status = "loading";
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.status = "success";
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    nextPage: (state, { payload: currentPage }) => {
      state.page = currentPage + 1;
    },
    lastPage: (state, { payload: currentPage }) => {
      state.page = currentPage = 500;
    },
    previousPage: (state, { payload: currentPage }) => {
      state.page = currentPage - 1;
    },
    firstPage: (state, { payload: currentPage }) => {
      state.page = currentPage = 1;
    },
  },
});

export const {
  fetchMoviesList,
  fetchMoviesListError,
  nextPage,
  lastPage,
  previousPage,
  firstPage,
} = moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesListState(state).page;

export default moviesListSlice.reducer;
