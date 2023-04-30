import { call, put } from 'redux-saga/effects';
import { setMoviesError } from "../features/movieSlice";

function* handleApiError(message) {
  yield put(setMoviesError(message));
}

export function* apiRequest(requestFunction, ...args) {
  const requestName = requestFunction?.name
  try {
    const response = yield call(requestFunction, ...args);
    return response;
  } catch (error) {
    yield call(handleApiError, requestName + "_" + error?.message);
    throw error;
  }
}
