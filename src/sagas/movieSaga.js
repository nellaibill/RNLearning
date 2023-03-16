import { takeLatest, put, fork, call } from 'redux-saga/effects';
import { fetchMovies } from "../api";
import { getMovies, setMovies } from "../features/movieSlice";

function* onLoadMoviesAsync({ payload }) {
    try {
        const moviename = payload;
        const response = yield call(fetchMovies, moviename);
        if (response.status === 200) {
            yield put(setMovies({ ...response.data }))
        }
    }
    catch (error) {
        console.log(error);
    }

}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

export const moviesSaga = [fork(onLoadMovies)]