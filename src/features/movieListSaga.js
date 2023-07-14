import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListLoad,
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
} from "./movieListSlice";
import { getGenres, getPopularMovies } from "./getDataApi";

function* getPopularMoviesHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getPopularMovies, page);
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(fetchMoviesListLoad.type, getPopularMoviesHandler);
}
