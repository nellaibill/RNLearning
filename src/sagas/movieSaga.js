import { takeLatest, put, fork, call } from 'redux-saga/effects';
import { fetchMovie, fetchMovies } from "../api";
import { getMovies, setMovies, setMoviesError, getMovie, setMovie } from "../features/movieSlice";

function* onLoadMoviesAsync({ payload }) {
    try {
        const moviename = payload;
        const response = yield call(fetchMovies, moviename);
        if (response.status === 200) {
            yield put(setMovies({ ...response.data }))
        }
    }
    catch (error) {
        console.log("moviesagafile",error);
        yield put(setMoviesError( error ))
    }
}
    function* onLoadMovies() {
        yield takeLatest(getMovies.type, onLoadMoviesAsync)
    }

    function* onLoadMovieAsync({ payload }) {
        try {
            const movieId = payload;
            const response = yield call(fetchMovie, movieId);
            if (response.status === 200) {
                yield put(setMovie({ ...response.data }))
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    function* onLoadMovie() {
        yield takeLatest(getMovie.type, onLoadMovieAsync)
    }

    export const moviesSaga = [fork(onLoadMovies), fork(onLoadMovie)]