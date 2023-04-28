import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
  const { movie
  } = useSelector((state) => ({ ...state.movie }));
  if (movie.Year === "2002") {
    throw new Error('Crashed!!!!');
  }
  return (
    <View style={styles.container}>
      <Text>Title {movie.Title}</Text>
      <Text>Year {movie.Year}</Text>
      <Text>Released {movie.Released}</Text>
      {movie?.Poster &&
        <Image style={styles.logo}
          source={{
            uri: movie?.Poster,
          }} />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 15
  },
  logo: {
    margin: 10,
    width: 250,
    height: 300,
  },
});

export default MovieDetails