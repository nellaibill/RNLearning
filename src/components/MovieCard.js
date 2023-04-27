import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getMovie } from '../features/movieSlice';
const MovieCard = (item, index) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleNavigation = (id) => {
        dispatch(getMovie(id));
        navigation.navigate('MovieDetails');
    }
    return (
        <View key={index}
            style={{ padding: 8, borderBottomColor: 'blue', borderBottomWidth: 0.5 }}>
            <TouchableOpacity onPress={() => handleNavigation(item.imdbID)}
            >
                <Text>{item.title}</Text>
                <Text>{item.year}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(MovieCard)