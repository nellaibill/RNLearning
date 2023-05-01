import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileImage from './ProfileImage'
import styles from '../styles';
import UserLogout from './UserLogout';
const UserProfile = () => {
  const userData = useSelector(state => state.user.userData)
  return (
    <View style={styles.container}>
      <ProfileImage image={userData.photoURL} />
      <View style={styles.profileData}>
        <Text> Welcome {userData.displayName}</Text>
        <Text> Email {userData.email}</Text>

        <UserLogout />
      </View>
    </View>
  )
}


export default UserProfile