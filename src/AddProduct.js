import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Button } from "@react-native-material/core";
import { database } from '../firebase/realtimeDbConfig'
import { ref, set } from "firebase/database";
const AddProduct = () => {
    const [text, onChangeText] = React.useState('');
   
    const addProducttoFireBaseRealTimeDB = () => {
        set(ref(database, 'users/'), {
            username: text
        }).then(() => {
            alert('data updated');
        }).catch((error) => {
            alert('error');
        });
    }
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Button variant="outlined" title="Add"
                onPress={() => addProducttoFireBaseRealTimeDB()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddProduct;