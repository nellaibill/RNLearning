import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileImage from './ProfileImage'
import styles from '../styles';
import UserLogout from './UserLogout';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const userData = useSelector(state => state.movie.userData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ProfileImage image={userData.photoURL} />
      <View style={styles.profileData}>
        <Text> Welcome {userData.displayName}</Text>
        <Text> Email {userData.email}</Text>

        <View style={styles.pt10}></View>
        <Button
          title="MAPS"
          onPress={() => navigation.navigate('MapScreen')}
        />
        <View style={styles.pt10}></View>
        <UserLogout />
      </View>
    </View>
  )
}


export default UserProfile