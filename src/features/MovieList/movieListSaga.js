import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesListLoad,
  fetchMoviesListSuccess,
  fetchMoviesListError,
  fetchSearchMoviesLoad,
} from "./movieListSlice";
import { getGenres, getPopularMovies, getSearch } from "../getDataApi";
import { selectPage } from "../../common/Pagination/paginationSlice";

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
    yield delay(800);
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const data = yield call(getSearch, { query, page });
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield takeLatest(fetchMoviesListLoad.type, getPopularMoviesHandler);
  yield takeLatest(fetchSearchMoviesLoad.type, getSearchMoviesHandler);
}
