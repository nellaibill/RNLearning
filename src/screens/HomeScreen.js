import { View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
     <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  )
}

export default HomeScreen