import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    page: 1,
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

    changePage: (state, { payload: action }) => {
      state.page = action;
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
    changePage,
    fetchSearchPeopleLoad,
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleList;
export const selectPeopleList = (state) => selectPeopleListState(state).people;
export const selectTotalResult = (state) =>
  selectPeopleListState(state).totalResults;
export const selectStatus = (state) => selectPeopleListState(state).status;
export const selectPage = (state) => selectPeopleListState(state).page;

export default peopleListSlice.reducer;
