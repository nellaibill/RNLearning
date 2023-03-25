import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@react-native-material/core";
import { quoteSuccess, startPolling, stopPolling } from '../features/quoteSlice';
const QuotesScreen = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const loading = useSelector((state) => state.loading);
  return (
    <View style={{ margin: 20 }}>

      <Button
        title="Start Polling"
        onPress={() => dispatch(startPolling())}
        style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
      />

      {loading && <Text>Loading...</Text>}
      <Text style={styles.quoteContent}>{quotes?.quotes?.content}</Text>

      <Button
        title="Stop Polling"
        onPress={() => dispatch(stopPolling())}
        style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  quoteContent: {
    height: 150,
    borderWidth: 1,
    marginTop: 20,
    padding:5
  },
});
export default QuotesScreen