import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const UserProfile = () => {
  const user = useSelector(state => state.user.value)
  return (
    <View>
      <Text>UserProfile</Text>

      <Text> Welcome {user.username}</Text>
    </View>
  )
}

export default UserProfile