import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const { moviesList } = useSelector((state) => ({ ...state.movie }));
    console.log("moviesList", moviesList);
    return (
        <View>
            {moviesList?.Search?.map((item, index) => (
                <View key={index} style={{ padding: 5, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                    <Text>{item.Title}</Text>
                    <Text>{item.Year}</Text>
                </View>
            ))}
        </View>
    )
}

export default MovieList