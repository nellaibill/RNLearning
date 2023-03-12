import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from './src/features/user'
const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login({ username: username }));
        navigation.navigate('UserProfile')
    }
    return (
        <View style={{ padding: 10 }}>
            <View >
                <Text >
                    Username
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                />
                <Text >
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                />
                <Button title="Login"
                    onPress={() => handleLogin()}> </Button>
            </View >
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10
    },
});
export default Login