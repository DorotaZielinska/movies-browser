import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieId: "",
    details: [],
    credits: [],
    status: "loading",
  },
  reducers: {
    fetchMovieDetails: (state, { payload: details, credits }) => {
      state.details = details;
      state.credits = credits;
    },
    getMovieId: (state, { payload: id }) => {
      state.status = "loading";
      state.movieId = id;
    },
  },
});

export const { fetchMovieDetails, getMovieId } = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieDetailsSlice.reducer;
