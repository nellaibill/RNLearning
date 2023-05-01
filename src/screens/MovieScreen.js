import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../features/movieSlice';
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard';
import styles from '../styles';
const MovieScreen = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies(name));
    }, [])
    const { moviesList, isError, errorMessage
    } = useSelector((state) => ({ ...state.movie }));


    onChange = (event) => {
        const { text } = event.nativeEvent;
        setName(text);
        dispatch(getMovies(text));
    };
    return (
        <ScrollView>
            <View style={styles.pad10}>
                <TextInput variant="standard" label="Label"
                    style={styles.input}
                    onChange={this.onChange}
                    value={name} />
                {(isError && moviesList?.length <= 0) && <Text>{errorMessage}</Text>}
                {(moviesList?.length === 0 && !isError) ? <ActivityIndicator /> :
                    <View>
                        {moviesList?.Search?.map((item, index) => {
                            return <MovieCard
                                title={item.Title}
                                year={item.Year}
                                imdbID={item.imdbID}
                                key={index} />
                        })}
                    </View>
                }
            </View>
        </ScrollView>
    )
}
export default MovieScreen