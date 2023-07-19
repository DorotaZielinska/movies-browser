import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    people: [],
    totalResults: 1,
    status: "loading",
  },
  reducers: {
    fetchPeopleListSuccess: (state, { payload: people }) => {
      state.people = people.data.results;
      state.totalResults = people.data.total_results;
      state.status = "success";
    },

    fetchPeopleListLoad: (state) => {
      state.status = "loading";
    },

    fetchPeopleListError: (state) => {
      state.status = "error";
    },

    fetchSearchPeopleLoad: (state) => {
      state.status = "loading";
    },
  },
});
export const {
  fetchPeopleListSuccess,
  fetchPeopleListLoad,
  fetchPeopleListError,
  fetchSearchPeopleLoad,
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleList;
export const selectPeopleList = (state) => selectPeopleListState(state).people;
export const selectTotalResult = (state) =>
  selectPeopleListState(state).totalResults;
export const selectStatus = (state) => selectPeopleListState(state).status;

export default peopleListSlice.reducer;
