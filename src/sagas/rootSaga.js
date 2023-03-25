import { all } from "redux-saga/effects"
import { moviesSaga } from "./movieSaga"
import { quoteSaga } from "./quoteSaga"

export default function* rootSaga() {
    yield all([...moviesSaga])
    yield all([...quoteSaga])
}