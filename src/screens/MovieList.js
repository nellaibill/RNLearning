import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getMovie } from '../features/movieSlice';
const MovieList = () => {

    const ListOfMovies = () => {
        return <View>
            {moviesList?.Search?.map((item, index) => (
                <View key={index}
                    style={{ padding: 8, borderBottomColor: 'blue', borderBottomWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => handleNavigation(item.imdbID)}
                    >
                        <Text>{item.Title}</Text>
                        <Text>{item.Year}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>;
    };

    const { moviesList, errorMessage, isError } = useSelector((state) => ({ ...state.movie }));
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleNavigation = (id) => {
        dispatch(getMovie(id));
        navigation.navigate('MovieDetails')
    }
    return (
        <View>
            {isError ? <Text>{errorMessage?.message}</Text> : <ListOfMovies />}
            {moviesList.length === 0 && <ActivityIndicator />}
        </View>
    )
}

export default MovieList