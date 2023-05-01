import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {
  GoogleSignin
} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserLogout } from '../features/movieSlice';

const UserLogout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userLogout = () => {
    alert('Your are signed out!');
    dispatch(setUserLogout());
    navigation.navigate('Home');
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => userLogout());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Button
        styles={styles.button}
        onPress={this.signOut}
        title="LogOut"></Button>
    </View>
  );
}

export default UserLogout