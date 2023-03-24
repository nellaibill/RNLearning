import { View } from 'react-native'
import { Button } from "@react-native-material/core";

import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Button
          title="ActionItems -Firebase DB"
          onPress={() => navigation.navigate('AddProduct')}
          style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
        />
        <Button
          title="RTK-Saga -Movie DB"
          onPress={() => navigation.navigate('MovieScreen')}
          style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
        />
        <Button
          title="Login-Profile"
          onPress={() => navigation.navigate('Login')}
          style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
        />
        <Button
          title="Product"
          onPress={() => navigation.navigate('ProductList')}
          style={{ alignSelf: "center", marginTop: 20, width: '100%' }}
        />
      </View>

    </>
  )
}

export default HomeScreen