import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    personId: 0,
    details: {},
    cast: [],
    crew: [],
    genres: [],
    status: "loading",
  },
  reducers: {
    fetchPeopleDetailsLoad: (state) => {
      state.status = "loading";
    },

    fetchPeopleDetailsSuccess: (state, { payload }) => {
      state.details = payload.details;
      state.cast = payload.credits.cast;
      state.crew = payload.credits.crew;
      state.genres = payload.genres;
      state.status = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
    },

    getPersonId: (state, { payload }) => {
      state.personId = payload.personId;
    },
  },
});

export const {
  fetchPeopleDetailsLoad,
  getPersonId,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.peopleDetails;
export const selectPersonId = (state) =>
  selectPeopleDetailsState(state).personId;
export const selectPeopleDetails = (state) =>
  selectPeopleDetailsState(state).details;
export const selectPeopleCredits = (state) =>
  selectPeopleDetailsState(state).credits;
export const selectDetailsStatus = (state) =>
  selectPeopleDetailsState(state).status;
export const selectPeopleCrew = (state) => selectPeopleDetailsState(state).crew;
export const selectPeopleCast = (state) => selectPeopleDetailsState(state).cast;
export const selectGenres = (state) => selectPeopleDetailsState(state).genres;
export const selectStatus = (state) => selectPeopleDetailsState(state).status;

export default peopleDetailsSlice.reducer;
