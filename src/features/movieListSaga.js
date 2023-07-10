import { call, put, select } from "redux-saga/effects";
import {
  fetchMoviesList,
  fetchMoviesListError,
  selectPage,
} from "./movieListSlice";
import { getGenres, getPopularMovies } from "./getDataApi";

function* fetchMoviesListHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    let data;
    data = yield call(getPopularMovies, { page: page });
    yield put(fetchMoviesList({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield fetchMoviesListHandler();
}
