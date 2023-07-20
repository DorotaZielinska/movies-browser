import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    personId: 0,
    cast: [],
    crew: [],
  credits: [],
  details: [],
    status: "loading",
  },
  reducers: {
    fetchPeopleMovieListLoad: (state) => {
      state.status = "loading";
    },
    fetchPeopleMovieListSuccess: (state, {payload: movie}) => {
      state.status = "success";
      state.cast = movie.data.cast
      state.crew = movie.data.crew;
      state.credits = movie.data.credits;
    },
    fetchPeopleMovieListError: (state) => {
      state.status = "error";
    },
    getPersonId: (state, {payload: id} ) => { 
      state.personId = id;
    },
  },
});
export const {
  fetchPeopleMovieListSuccess,
  fetchPeopleMovieListError,
  fetchPeopleMovieListLoad,
  getPersonId,
} = personDetailsSlice.actions;

export const selectPersonDetailsState = (state) => state.personDetails;

export const selectStatus = (state) => selectPersonDetailsState(state).status;
export const selectPersonId = (state) =>
  selectPersonDetailsState(state).personId;
export const selectCrew = (state) => selectPersonDetailsState(state).crew;
export const selectCast = (state) => selectPersonDetailsState(state).cast;
//export const selectCredits = (state) => selectPersonDetailsState(state).credits

export default personDetailsSlice.reducer;
