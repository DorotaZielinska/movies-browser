import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    people: [],
    totalPages: 0,
    totalResults: 1,
    status: "loading",
  },
  reducers: {
    fetchPeopleListSuccess: (state, { payload: people }) => {
      state.people = people.data.results;
      state.totalResults = people.data.total_results;
      state.totalPages = people.data.total_pages;
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
export const selectTotalPeoplePages = (state) =>
  selectPeopleListState(state).totalPages;
export default peopleListSlice.reducer;
