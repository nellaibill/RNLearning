import { View } from 'react-native'
import { Button } from "@react-native-material/core";

import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Button
          title="AddProduct"
          onPress={() => navigation.navigate('AddProduct')}
          style={{ alignSelf: "center", marginTop: 40 }}
        />
      </View>
      <View>
        <Button
          title="Go to Products"
          onPress={() => navigation.navigate('Products')}
          style={{ alignSelf: "center", marginTop: 40 }}
        />
      </View>
    </>
  )
}

export default HomeScreen