import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        moviesList: [],
        movie: {},
        errorMessage: "",
        isError: false,
    },
    reducers: {
        getMovies(name) {
            return name;
        },
        setMovies: (state, action) => {
            state.moviesList = action.payload
        },
        getMovie(id) {
            return id;
        },
        setMovie: (state, action) => {
            state.movie = action.payload
        },
        setMoviesError(state, action) {
            state.errorMessage = action.payload
            state.isError = true;
        }
    },
})

export const { getMovies, setMovies, getMovie, setMovie, setMoviesError } = movieSlice.actions
export default movieSlice.reducer;