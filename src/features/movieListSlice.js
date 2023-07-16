import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
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

    changePage: (state, { payload: action }) => {
      state.page = action;
    },

    fetchSearchMoviesLoad: (state) => {
      state.status = "loading";
    },
  },
});
export const {
  changePage,
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
export const selectPage = (state) => selectMoviesListState(state).page;

export default moviesListSlice.reducer;
