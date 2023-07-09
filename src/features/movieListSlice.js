import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'MovieList',
    initialState: {
        page: 1,
        movies: [],
        genres: [],
    },
    reducers: {
        fetchMoviesList: (state, { payload: movies }) => {
            state.status = "loading";
            state.movies = movies.data.results;
            state.genres = movies.genres;
        },
    }
})
export const { fetchMoviesList } = moviesListSlice.actions

export const selectMoviesListState = (state) => state.moviesList;
export const selectMoviesList = (state) => selectMoviesListState.movies;
export const selectGenres = (state) => selectMoviesListState.genres;
export const selectStatus = (state) => selectMoviesList.status;
export const selectPage = (state) => selectMoviesList.page;
export default moviesListSlice.reducer
