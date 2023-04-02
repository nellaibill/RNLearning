import { View, StyleSheet } from 'react-native'
import { Button } from "@react-native-material/core";

import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
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
        <Button
          title="Login-Profile"
          onPress={() => navigation.navigate('Login')}
          style={styles.btnStyle}
        />
           <Button
          title="Maps"
          onPress={() => navigation.navigate('MapScreen')}
          style={styles.btnStyle}
        />

      </View>

    </>
  )
}
const styles = StyleSheet.create({
  btnStyle: {
    alignSelf: "center", marginTop: 25,width: '100%'
  },
  input: {
    borderWidth: 1,
  },
});
export default HomeScreen