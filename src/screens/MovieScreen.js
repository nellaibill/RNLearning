import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovie, getMovies } from '../features/movieSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
const MovieScreen = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies(name));
    }, [])
    const { errorMessage, isError, moviesList
    } = useSelector((state) => ({ ...state.movie }));


    onChange = (event) => {
        const { eventCount, target, text } = event.nativeEvent;
        setName(text);
        dispatch(getMovies(text));
    };
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
    const navigation = useNavigation();
    const handleNavigation = (id) => {
        dispatch(getMovie(id));
        navigation.navigate('MovieDetails')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput variant="standard" label="Label"
                    style={styles.input}
                    onChange={this.onChange}
                    value={name} />

                {moviesList.Error && <Text>{moviesList.Error}</Text>}
                {moviesList?.length === 0 ? <ActivityIndicator /> : <ListOfMovies />}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
    },
    container: {
        margin: 15,
    },
});
export default MovieScreen