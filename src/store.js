import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "./features/MovieDetails/movieDetailsSlice";
import moviesListReducer from "./features/movieListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
