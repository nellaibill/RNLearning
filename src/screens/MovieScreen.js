import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../features/movieSlice';
import MovieList from './MovieList';

const MovieScreen = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies(name));
    }, [name])
    return (
        <View>
            <Text>MovieScreen</Text>
            <MovieList></MovieList>
        </View>
    )
}

export default MovieScreen