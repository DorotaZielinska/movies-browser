import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
    movies: [],
    genres: [],
    status: "loading",
    query: "",
  },
  reducers: {
    fetchMoviesListLoad: (state) => {
      state.status = "loading";
    },
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.status = "success";
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    setSearchQuery: (state, { payload: newQuery }) => {
      state.query = newQuery;
    },

  },
});
export const { fetchMoviesListLoad, fetchMoviesListSuccess, fetchMoviesListError, setSearchQuery } =
  moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesListState(state).page;
export const selectQuery = (state) => selectMoviesListState(state).query;

export default moviesListSlice.reducer;
