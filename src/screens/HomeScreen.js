import { View } from 'react-native'
import { Button } from "@react-native-material/core";
import React from 'react'
import Login from '../../Login';
import styles from '../styles';
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.plr20}>
        <Button
          title="Redux-Saga-Polling"
          onPress={() => navigation.navigate('QuotesScreen')}
          style={styles.btnStyle}
        />
        <Button
          title="RTK-Saga -Movie DB"
          onPress={() => navigation.navigate('MovieScreen')}
          style={styles.btnStyle}
        />
        <Button
          title="ActionItems -Firebase DB"
          onPress={() => navigation.navigate('AddTask')}
          style={styles.btnStyle}
        />
        <Button
          title="Memo-Callback-Transition"
          onPress={() => navigation.navigate('ProductList')}
          style={styles.btnStyle}
        />
        
        <Login />

      </View>

    </>
  )
}
export default HomeScreen