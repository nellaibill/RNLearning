import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { startPolling, stopPolling } from '../features/quoteSlice';
import styles from '../styles';
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
      <Text style={styles.quoteContent}>{quotes?.quotes?.content}</Text>
    </View>
  )
}
export default QuotesScreen