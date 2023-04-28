import { View, Text, Button, SafeAreaView, ScrollView  } from 'react-native'
import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { login } from './src/features/user'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from 'react-native-google-signin';
  import auth from '@react-native-firebase/auth';
  import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [loggedIn, setloggedIn] = useState(false);
    const [user, setUser] = useState([]);
    const navigation = useNavigation();
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setloggedIn(true);

            const credential = auth.GoogleAuthProvider.credential(
                idToken,
                accessToken,
            );
            await auth().signInWithCredential(credential);
        } catch (error) {
            console.log("error", error);
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

        if (user) {
            setloggedIn(true);
            handleLogin(user);
        }
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
    const dispatch = useDispatch();
    const handleLogin = (user) => {
        dispatch(login(user));
        navigation.navigate('UserProfile')
    }
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">

                        <GoogleSigninButton
                            style={{ width: '100%', height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this._signIn}
                        />
          
                    <View >
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login