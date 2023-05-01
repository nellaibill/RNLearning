import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        moviesList: [],
        movie: {},
        errorMessage: "",
        isError: false,
        userData: [],
        isLoggedIn: false,
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
        },
        setUserLoggedInData: (state, action) => {
            state.userData = action.payload
            state.isLoggedIn = true;
        },
        setUserLogout(state) {
            state.userData = [];
            state.isLoggedIn = false;
        }
    },
})

export const { getMovies, setMovies, getMovie, setMovie, setMoviesError, setUserLoggedInData,setUserLogout } = movieSlice.actions
export default movieSlice.reducer;