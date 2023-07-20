import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    totalResults: 1,
    status: "loading",
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.totalResults = movies.data.total_results;
      state.status = "success";
    },

    fetchMoviesListLoad: (state) => {
      state.status = "loading";
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },

    fetchSearchMoviesLoad: (state) => {
      state.status = "loading";
    },
  },
});
export const {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  fetchMoviesListLoad,
  fetchSearchMoviesLoad,
} = moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectTotalResult = (state) =>
  selectMoviesListState(state).totalResults;
export const selectStatus = (state) => selectMoviesListState(state).status;

export default moviesListSlice.reducer;
