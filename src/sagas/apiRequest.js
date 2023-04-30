import { call, put } from 'redux-saga/effects';
import { setMoviesError } from "../features/movieSlice";

function* handleApiError(error) {
  yield put(setMoviesError(error.message));
}

export function* apiRequest(requestFunction, ...args) {
  try {
    const response = yield call(requestFunction, ...args);
    return response;
  } catch (error) {
    yield call(handleApiError, error);
    throw error;
  }
}
