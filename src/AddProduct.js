import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';
import { Button } from "@react-native-material/core";
import { realtimeDbConfig } from '../firebase/realtimeDbConfig'
import { firestoreDB } from '../firebase/firestoreConfig';
import { query, ref, set } from "firebase/database";
import { collection, doc, setDoc, addDocs, addDoc } from "firebase/firestore";

const AddProduct = () => {
    const [text, onChangeText] = React.useState('');

    const addProductToFireStore = () => {
        addDoc(collection(firestoreDB, "users"), {
            username: text
        }).then(() => {
            console.log('data submitted');
        }).catch((error) => {
            console.log(error);
        });
    }
    const addProducttoFireBaseRealTimeDB = () => {
        set(ref(realtimeDbConfig, 'users/'), {
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
            <Button variant="outlined" title="AddFireStore"
                onPress={() => addProductToFireStore()} />
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