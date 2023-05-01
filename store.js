import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import MovieReducer from "./src/features/movieSlice";
import quoteReducer from "./src/features/quoteSlice";
import rootSaga from "./src/sagas/rootSaga";
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        movie: MovieReducer,
        quotes: quoteReducer,
    },
    middleware: [sagaMiddleware].concat(logger)
})

sagaMiddleware.run(rootSaga)

export default store;