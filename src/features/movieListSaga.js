import { call, put, select, takeEvery, all, delay } from "redux-saga/effects";
import {
  fetchMoviesList,
  fetchMoviesListError,
  selectPage,
  fetchMoviesListSuccess,
  nextPage,
  previousPage,
} from "./movieListSlice";
import { getGenres, getPopularMovies, getPopularPages } from "./getDataApi";

function* fetchMoviesListHandler() {
  try {
    yield delay(1000);
    const currentPage = yield select(selectPage);
    console.log(currentPage);
    const genres = yield call(getGenres);
    let data;
    if (currentPage > 1) {
      data = yield call(getPopularPages, { currentPage });
    } else {
      data = yield call(getPopularMovies);
    }
    yield put(fetchMoviesListSuccess({ data, genres, currentPage }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield all([
    (nextPage.type, fetchMoviesListHandler()),
    (fetchMoviesListSuccess.type, fetchMoviesListHandler()),
  ]);
}
