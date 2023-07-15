import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    page: 1,
    movies: [],
    genres: [],
    status: "loading",
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.status = "success";
    },

    fetchMoviesListLoad: (state) => {
      state.status = "success";
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },

    changePage: (state, { payload: action }) => {
      state.page = action;
    },

    fetchSearchMoviesLoad: (state, query) => {
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
export const selectStatus = (state) => selectMoviesListState(state).status;
export const selectPage = (state) => selectMoviesListState(state).page;

export default moviesListSlice.reducer;
