import { View, Text } from 'react-native'
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [count, setCount] = useState(0);

    const multipliedValue = count * 2;
    const handleIncrement = () => {
        console.log("Triggered");
        setCount((c) => c + 1);
    }
    const [cart, setCart] = useState(0);
    return (
        <View>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Login" onPress={handleIncrement}> </Button>
        </View>
    )
}

export default Login