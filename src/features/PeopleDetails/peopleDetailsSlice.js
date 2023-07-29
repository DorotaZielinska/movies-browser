import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    status: "loading",
    personId: 0,
    details: {},
    cast: [],
    crew: [],
    genres: [],
    credits: [],
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
      state.credits = payload.credits;
      state.status = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
    },

    getPersonId: (state, action) => {
      state.personId = action.payload;
    },

    resetPeopleDetails: (state) => {
      state.personId = null;
      state.details = null;
      state.credits = null;
      state.status = "loading";
    },
  },
});

export const {
  fetchPeopleDetailsLoad,
  getPersonId,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
  resetPeopleDetails,
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
export const selectGenresDetails = (state) =>
  selectPeopleDetailsState(state).genres;

export default peopleDetailsSlice.reducer;
