import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { startPolling, stopPolling } from '../features/quoteSlice';
import styles from '../styles';
import { ActivityIndicator } from '@react-native-material/core';
const QuotesScreen = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  useEffect(() => {
    dispatch(startPolling());
    return () => {
      dispatch(stopPolling());
    };
  }, []);
  return (
    <View style={styles.pad10}>
      {quotes?.loading && (<ActivityIndicator/>)}
      <Text style={styles.quoteContent}>{quotes?.quotes?.content}</Text>
    </View>
  )
}
export default QuotesScreen