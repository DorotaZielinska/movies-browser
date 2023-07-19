import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "./features/movieDetailsSlice";
import moviesListReducer from "./features/MovieList/movieListSlice";
import peopleListReducer from "./features/PeopleList/peopleSlice";
import paginationReducer from "./common/Pagination/paginationSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
    movieDetails: movieDetailsReducer,
    peopleList: peopleListReducer,
    pagination: paginationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
