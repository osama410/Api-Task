import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './actions';
import axios from 'axios';
import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from './store';

const MovieList = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector(state => state.movie);
  
  useEffect(() => {
    dispatch(FETCH_MOVIES_REQUEST());
    axios.get('https://reactnative.dev/movies.json').then((response) => {
      const movies = response.data.movies;
      dispatch(FETCH_MOVIES_SUCCESS(movies));
    }).catch((error) => {
      const errorMsg = error.message;
      dispatch(FETCH_MOVIES_FAILURE(errorMsg));
    })

  }, []);

  if (moviesData.loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (moviesData.error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {moviesData.movies.map((movie) => (
        <View key={movie.id} style={styles.movie}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseYear}>{movie.releaseYear}</Text>
        </View>
      ))}
    </View>
  );
};

export default MovieList;

