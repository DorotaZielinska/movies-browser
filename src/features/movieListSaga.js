import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListLoad,
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
  fetchSearchMoviesLoad,
} from "./movieListSlice";
import { getGenres, getPopularMovies, getSearch } from "./getDataApi";

function* getPopularMoviesHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getPopularMovies, page);
    yield delay(1000);
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

function* getSearchMoviesHandler({ payload: query }) {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getSearch, { query, page, genres });
    yield delay(1000);
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(fetchMoviesListLoad.type, getPopularMoviesHandler);
  yield takeLatest(fetchSearchMoviesLoad.type, getSearchMoviesHandler);
}
