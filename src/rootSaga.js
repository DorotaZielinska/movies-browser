import { all } from "redux-saga/effects";
import { watchFetchMoviesList } from "./features/MovieList/movieListSaga";
import { watchFetchMovieDetails } from "./features/movieDetailsSaga";
import { watchFetchPeopleList } from "./features/PeopleList/peopleSaga";
import { watchFetchPeopleDetails } from "./features/PeopleDetails/peopleDetailsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMoviesList(),
        watchFetchMovieDetails(),
        watchFetchPeopleList(),
        watchFetchPeopleDetails(),
    ]);
}