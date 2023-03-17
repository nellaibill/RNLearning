import axios from "axios";

const APIENDPOINT = 'http://www.omdbapi.com/?apikey=c051f5a4';

export const fetchMovies = async (moviename) => {
    return axios.get(`${APIENDPOINT}&s=${moviename}`);
}

export const fetchMovie = async (movieId) => {
    return axios.get(`${APIENDPOINT}&i=${movieId}`);
}