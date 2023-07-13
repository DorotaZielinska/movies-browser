import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  selectPage,
  selectQuery,
  fetchMoviesListLoad
} from "./movieListSlice";
import { getGenres, getPopularMovies, getSearch } from "./getDataApi";

function* fetchMoviesListHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    let data;

    if (query || query.trim() !== "") {
      data = yield call(getSearch, { query: query, page: page, genres: genres });
    }
    else {
      data = yield call(getPopularMovies, { page: page });
    }
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(fetchMoviesListLoad.type, fetchMoviesListHandler);
}