import { all } from "redux-saga/effects";
import { watchFetchMoviesList } from "./features/movieListSaga";
import { watchFetchMovieDetails } from "./features/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMoviesList(),
        watchFetchMovieDetails(),
    ]);
}