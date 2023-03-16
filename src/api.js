import axios from "axios";

const APIENDPOINT = 'http://www.omdbapi.com/?i=tt3896198&apikey=c051f5a4';

export const fetchMovies = async (moviename) => {
    return axios.get(`${APIENDPOINT}&s=${moviename}`);
}