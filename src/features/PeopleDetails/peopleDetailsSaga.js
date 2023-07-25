import { select, put, delay, takeLatest, call } from "redux-saga/effects";
import { fetchPeopleDetailsError, fetchPeopleDetailsLoad, fetchPeopleDetailsSuccess, getPersonId, selectPersonId } from "./peopleDetailsSlice";
import { getPeopleDetails, getPeopleMovieCredits } from "../getDataApi";

function* fetchPeopleDetailsHandler() {
    try{
        yield delay(300);
        const id = yield select(selectPersonId);
        // console.log("id",selectPersonId)
        const details = yield call(getPeopleDetails,  id);
        // const credits = yield call(getPeopleMovieCredits,  id);
        // console.log("fetchPeopleDetailsSuccess", credits, details)
        yield put(fetchPeopleDetailsSuccess({ details }));
    } catch (error) {
        yield put(fetchPeopleDetailsError());
    }
}

export function* watchFetchPeopleDetails() {
  yield takeLatest(getPersonId.type, fetchPeopleDetailsHandler);
}