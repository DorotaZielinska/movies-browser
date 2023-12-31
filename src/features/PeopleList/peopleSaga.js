import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleListSuccess,
  fetchPeopleListLoad,
  fetchPeopleListError,
  fetchSearchPeopleLoad,
} from "./peopleSlice";
import { getPopularPeople, getSearchPeople } from "../getDataApi";
import { selectPage } from "../../common/Pagination/paginationSlice";

function* getPopularPeopleHandler() {
  try {
    const page = yield select(selectPage);
    const data = yield call(getPopularPeople, page);
    yield delay(1000);
    yield put(fetchPeopleListSuccess({ data }));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

function* getSearchPeopleHandler({ payload: query }) {
  try {
    yield delay(800);
    const page = yield select(selectPage);
    const data = yield call(getSearchPeople, { query, page });
    yield put(fetchPeopleListSuccess({ data }));
  } catch (error) {
    yield put(fetchPeopleListError());
  }
}

export function* watchFetchPeopleList() {
  yield takeLatest(fetchPeopleListLoad.type, getPopularPeopleHandler);
  yield takeLatest(fetchSearchPeopleLoad.type, getSearchPeopleHandler);
}
