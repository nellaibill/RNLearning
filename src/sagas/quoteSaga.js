import { call, put, take, fork, cancel, cancelled, delay } from "redux-saga/effects";
import { fetchQuotes } from "../api";
import { startPolling, stopPolling, quoteSuccess } from "../features/quoteSlice";
function* quoteStatusCheckLoop() {
    while (true)
        try {
            const quotes = yield call(fetchQuotes)
            yield put({ type: quoteSuccess, quotes: quotes });
            yield delay(2000)

        } finally {
            if (yield cancelled()) {
            }
        }
}

export function* quotePollSaga() {
    while (yield take(startPolling)) {
        const quotePollTask = yield fork(quoteStatusCheckLoop)
        
        yield take(stopPolling)

        yield cancel(quotePollTask)
    }
}


export const quoteSaga = [fork(quotePollSaga)]