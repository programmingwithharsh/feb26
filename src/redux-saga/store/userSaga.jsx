import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "./userSlice";

function* fetchUsers() {
  try {
    const res = yield call(() => axios.get("https://jsonplaceholder.typicode.com/users"));
    yield put(fetchUsersSuccess(res.data));
  } catch (e) {
    yield put(fetchUsersFailure(e.message));
  }
}

export default function* userSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsers);
}
