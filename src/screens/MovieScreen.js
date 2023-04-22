import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../features/movieSlice';
import MovieList from './MovieList';

import { useSelector } from 'react-redux'
const MovieScreen = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies(name));
    }, [])
    const { moviesList: { Error: error }
    } = useSelector((state) => ({ ...state.movie }));

    onChange = (event) => {    
        const {eventCount, target, text} = event.nativeEvent;
        setName(text);
        dispatch(getMovies(text));
      };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput variant="standard" label="Label"
                    style={styles.input}
                    onChange={this.onChange}
                    value={name} />
                {error && <Text>{error}</Text>}
                <MovieList></MovieList>
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
        padding: 5,
    },
});
export default MovieScreen