import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../features/movieSlice';
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard';
const MovieScreen = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies(name));
    }, [])
    const { moviesList
    } = useSelector((state) => ({ ...state.movie }));


    onChange = (event) => {
        const { text } = event.nativeEvent;
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
                {moviesList.Error && <Text>{moviesList.Error}</Text>}
                {moviesList?.length === 0 ? <ActivityIndicator /> :
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