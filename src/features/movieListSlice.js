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
    fetchMoviesList: (state, { payload: movies }) => {
      state.status = "loading";
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.status = "success";
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    setSearchQuery:(state, {payload: newQuery}) => {
      console.log("newQuery ", newQuery);
      state.query = newQuery;
    }
  },
});
export const { fetchMoviesList, fetchMoviesListError, setSearchQuery } =
  moviesListSlice.actions;

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesList(state).page;
export const selectQuery = (state) => selectMoviesList(state).query;

export default moviesListSlice.reducer;
