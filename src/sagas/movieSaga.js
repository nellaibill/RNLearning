import { takeLatest, put, fork, call } from 'redux-saga/effects';
import { fetchMovie, fetchMovies } from "../api";
import { getMovies, setMovies, setMoviesError, getMovie, setMovie } from "../features/movieSlice";
import { apiRequest } from './apiRequest';
function* onLoadMoviesAsync({ payload }) {
        const moviename = payload;
        const response = yield call(apiRequest, fetchMovies, moviename);
        yield put(setMovies({ ...response.data }))
}
function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

function* onLoadMovieAsync({ payload }) {
    const movieId = payload;
    const response = yield call(apiRequest, fetchMovie, movieId);
    yield put(setMovie({ ...response.data }))
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync)
}

export const moviesSaga = [fork(onLoadMovies), fork(onLoadMovie)]