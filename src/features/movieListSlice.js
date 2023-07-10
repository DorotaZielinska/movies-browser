import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'moviesList',
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
export const selectMoviesList = (state) => selectMoviesListState(state).movies;
export const selectGenres = (state) => selectMoviesListState(state).genres;
export const selectStatus = (state) => selectMoviesList(state).status;
export const selectPage = (state) => selectMoviesList(state).page;

export default moviesListSlice.reducer
