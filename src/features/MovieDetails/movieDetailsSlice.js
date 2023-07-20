import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieId: null,
    details: null,
    credits: null,
    status: "loading",
  },
  reducers: {
    fetchMovieDetailsSuccess: (state) => {
      state.status = "success";
    },

    fetchMovieDetails: (state, { payload: details, credits }) => {
      state.details = details;
      state.credits = credits;
    },

    getMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },

    fetchMoviesListError: (state) => {
      state.status = "error";
    },

    resetMovieDetails: (state) => {
      state.movieId = null;
      state.details = null;
      state.credits = null;
      state.status = "loading";
    },
  },
});

export const {
  fetchMovieDetails,
  getMovieId,
  fetchMovieDetailsSuccess,
  fetchMoviesListError,
  resetMovieDetails,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieDetailsSlice.reducer;
