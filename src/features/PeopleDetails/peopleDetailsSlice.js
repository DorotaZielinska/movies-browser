import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    personId: null,
    details: null,
    credits: null,
    cast: [],
    crew: [],
    genres:[],
    status: "loading",
  },
  reducers: {
    fetchPeopleDetailsLoad: (state) => {
      state.status = "loading";
    },

    fetchPeopleDetailsSuccess: (state, { payload }) => {
      state.details = payload.details;
      state.credits = payload.credits;
      state.cast = payload.cast;
      state.crew = payload.crew;
      state.genres = payload.genres;
      state.status = "success";
    },
    fetchPeopleDetailsError: (state) => {
      state.status = "error";
    },

    getPersonId: (state, { payload }) => {
      state.status = "loading";
      state.personId = payload.id;
    },

  //  resetPeopleDetails: (state) => {
    //  state.movieId = null;
  //    state.details = null;
 //     state.credits = null;
  //    state.status = "loading";
  //  },
  },
});

export const {
  fetchPeopleDetailsLoad,
  getPersonId,
  fetchPeopleDetailsSuccess,
  fetchPeopleDetailsError,
 // resetPeopleDetails,
} = peopleDetailsSlice.actions;

export const selectPeopleDetailsState = (state) => state.peopleDetails;
export const selectPersonId = (state) => selectPeopleDetailsState(state).personId;
export const selectPeopleDetails = (state) => selectPeopleDetailsState(state).details;
export const selectPeopleCredits = (state) => selectPeopleDetailsState(state).credits;
export const selectDetailsStatus = (state) => selectPeopleDetailsState(state).status;
export const selectPeopleCrew = (state) => selectPeopleDetailsState(state).crew;
export const selectPeopleCast = (state) => selectPeopleDetailsState(state).cast;
export const selectGenres = (state) => selectPeopleDetailsState(state).genres;

export default peopleDetailsSlice.reducer;