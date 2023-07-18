import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  fetchMovieDetails,
  getMovieId,
  selectMovieId,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../getDataApi";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieDetails(details, credits));
  } catch (error) {}
}

export function* watchFetchMovieDetails() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
