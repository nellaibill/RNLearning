import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
  const { movie
  } = useSelector((state) => ({ ...state.movie }));
  return (
    <View style={styles.container}>
      <Text>Title {movie.Title}</Text>
      <Text>Year {movie.Year}</Text>
      <Text>Released {movie.Released}</Text>
      <Image style={styles.logo}
        source={{
          uri: movie?.Poster,
        }} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logo: {
    width: 150,
    height: 200,
  },
});

export default MovieDetails