import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getMovie } from '../features/movieSlice';
const MovieList = () => {
    const { moviesList } = useSelector((state) => ({ ...state.movie }));
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleNavigation = (id) => {
        console.log(id);
        dispatch(getMovie(id));
        navigation.navigate('MovieDetails')
    }
    return (
        <View>
            {moviesList?.Search?.map((item, index) => (
                <View key={index}
                    style={{ padding: 5, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => handleNavigation(item.imdbID)}
                    >
                        <Text>{item.Title}</Text>
                        <Text>{item.Year}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

export default MovieList