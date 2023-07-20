import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleMovieListError,
  fetchPeopleMovieListLoad,
  fetchPeopleMovieListSuccess,
  getPersonId,
  selectPersonId,
} from "./peopleDetailsSlice";
import { getPeopleDetails, getPeopleMovieCredits } from "../getDataApi";

function* fetchPersonDetailsHandler() {
  try {
    yield delay(300);
    const id = yield select(selectPersonId);
    const details = yield call(getPeopleDetails, { personId: id });
    const credits = yield call(getPeopleMovieCredits, { personId: id });
    yield put(fetchPeopleMovieListLoad());
    yield put(fetchPeopleMovieListSuccess({ credits, details }));
  } catch (error) {
    yield put(fetchPeopleMovieListError());
  }
}

export function* watchFetchPeopleDetails() {
  yield takeLatest(getPersonId.type, fetchPersonDetailsHandler);
}
