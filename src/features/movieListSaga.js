import { call, put, select } from "redux-saga/effects";
import {
  fetchMoviesList,
  fetchMoviesListError,
  selectPage,
  selectQuery
} from "./movieListSlice";
import { getGenres, getPopularMovies, getSearch } from "./getDataApi";

function* fetchMoviesListHandler() {
  console.log("Running fetchMoviesListHandler");
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    console.log("Query: ", query);
    let data;

  
    if (query && query.trim() !== "") {
      console.log("Running getSearch");
      data = yield call(getSearch, { query: query, page: page });
    } else {
      console.log("Running getPopularMovies");
      data = yield call(getPopularMovies, { page: page });
    }

    yield put(fetchMoviesList({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* watchFetchMoviesList() {
  yield fetchMoviesListHandler();
}
