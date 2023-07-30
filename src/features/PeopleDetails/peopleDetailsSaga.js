import { select, put, delay, takeLatest, call } from "redux-saga/effects";
import {
  fetchPeopleDetailsError,
  fetchPeopleDetailsSuccess,
  getPersonId,
  selectPersonId,
} from "./peopleDetailsSlice";
import { getPeopleDetails } from "../getDataApi";

function* fetchPeopleDetailsHandler() {
  try {
    yield delay(300);
    const id = yield select(selectPersonId);
    const details = yield call(getPeopleDetails, id);
    yield put(fetchPeopleDetailsSuccess({ details, }));
  } catch (error) {
    yield put(fetchPeopleDetailsError());
  }
}

export function* watchFetchPeopleDetails() {
  yield takeLatest(getPersonId.type, fetchPeopleDetailsHandler);
}
