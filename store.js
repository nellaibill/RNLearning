import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import MovieReducer from "./src/features/movieSlice";
import rootSaga from "./src/sagas/rootSaga";
import userReducer from './src/features/user'


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        movie: MovieReducer,
        user: userReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;