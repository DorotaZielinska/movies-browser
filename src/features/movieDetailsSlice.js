import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieId: 0,
        details: [],
        credits: [],
        status: "loading",
    },
    reducers: {
        fetchMovieDetails: (state, { payload:movie} ) => {
            state.details = movie.details;
            state.credits = movie.credits;
        },
        getMovieId: (state, { payload }) => {
            state.status = "loading";
            state.movieId = payload.movieId;
        },
    },
})

export const { fetchMovieDetails, getMovieId } = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieDetailsSlice.reducer;