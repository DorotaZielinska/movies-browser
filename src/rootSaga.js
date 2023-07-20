import { all } from "redux-saga/effects";
import { watchFetchMoviesList } from "./features/MovieList/movieListSaga";
import { watchFetchMovieDetails } from "./features/MovieDetails/movieDetailsSaga";
import { watchFetchPeopleList } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMoviesList(),
    watchFetchMovieDetails(),
    watchFetchPeopleList(),
  ]);
}
