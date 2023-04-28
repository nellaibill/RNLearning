import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileImage from './ProfileImage'
const UserProfile = () => {
  const userData = useSelector(state => state.user.userData)
  return (
    <View style={styles.container}>
      <ProfileImage image={userData.photoURL} />
      <View style={styles.profileData}>
        <Text> Welcome {userData.displayName}</Text>
        <Text> Email {userData.email}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  profileData: {
    paddingTop: 60
  }
});


export default UserProfile