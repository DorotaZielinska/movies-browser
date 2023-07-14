import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesList,
  fetchMoviesListError,
  selectPage,
  changePage,
} from "./movieListSlice";
import { getGenres, getPopularMovies } from "./getDataApi";

function* fetchChangePageHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getPopularMovies, page);
    yield put(fetchMoviesList({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

function* getPopularMoviesHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getPopularMovies, page);
    yield put(fetchMoviesList({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(changePage.type, fetchChangePageHandler);
  yield (fetchMoviesListSuccess.type, getPopularMoviesHandler());
}
