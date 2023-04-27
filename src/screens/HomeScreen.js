import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'
import { Button } from "@react-native-material/core";

import React, { useEffect, useState } from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.log("error",error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (user) setloggedIn(true);
  }
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '51050635347-471mlfgj7l0vnqr5v4h1ldgr6elr1uqp.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      setloggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
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
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <GoogleSigninButton
                  style={{ width: 192, height: 48 }}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                />
              </View>
              <View style={styles.buttonContainer}>
                {!user && <Text>You are currently logged out</Text>}
                {user && (
                  <View>
                    <Text>Welcome {user.displayName}</Text>
                    <Button
                      onPress={this.signOut}
                      title="LogOut"
                      color="red"></Button>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

      </View>

    </>
  )
}
const styles = StyleSheet.create({
  btnStyle: {
    alignSelf: "center", marginTop: 25, width: '100%'
  },
  input: {
    borderWidth: 1,
  },
});
export default HomeScreen