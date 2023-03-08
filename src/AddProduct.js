import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';
import { Button } from "@react-native-material/core";
import { realtimeDbConfig } from '../firebase/realtimeDbConfig'
import { firestoreDB } from '../firebase/firestoreConfig';
import { query, ref, set } from "firebase/database";
import { collection, doc, setDoc, addDocs, addDoc } from "firebase/firestore";
import firestore from '@react-native-firebase/firestore';

const AddProduct = () => {
    const [text, onChangeText] = React.useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const subscriber = firestore()
            .collection('users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                console.log(users);
                setUsers(users);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
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
    if (loading) {
        return <ActivityIndicator />;
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
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>User Name: {item.username}</Text>
                    </View>
                )}
            />
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