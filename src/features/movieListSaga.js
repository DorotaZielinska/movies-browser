import { debounce, call, put, select } from "redux-saga/effects";
import { fetchMoviesList, selectPage } from "./movieListSlice";
import { getGenres, getPopularMovies } from "./getDataApi";


function* fetchMoviesListHandler() {
    try {
        const page = yield select(selectPage);
        const genres = yield call(getGenres);
        let data;
        data = yield call(getPopularMovies, { page: page});
        yield put(fetchMoviesList({ data, genres}));
    } catch(error) {
        yield put()
    }
}

export function* watchFetchMoviesList() {
    yield debounce(3000, fetchMoviesListHandler);
}