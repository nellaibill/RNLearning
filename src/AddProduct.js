import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import { realtimeDbConfig } from '../firebase/realtimeDbConfig'
import { firestoreDB } from '../firebase/firestoreConfig';
import { ref, set } from "firebase/database";
import { collection, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore";
const AddProduct = () => {
    const [productName, setProductName] = React.useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const getAlldata = () => {
        getDocs(collection(firestoreDB, "users")).then(docSnap => {
            let users = [];
            docSnap.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id })
            });
            setUsers(users);
            setLoading(false);
        });
    }
    const deleteData = (id) => {
        deleteDoc(doc(firestoreDB, "users", id))
        getAlldata();
    }
    useEffect(() => {
        getAlldata();
    }, []);
    const addProductToFireStore = () => {
        addDoc(collection(firestoreDB, "users"), {
            username: productName
        }).then(() => {
            getAlldata();
            setProductName('');
        }).catch((error) => {
            console.log(error);
        });
    }
    const addProducttoFireBaseRealTimeDB = () => {
        set(ref(realtimeDbConfig, 'users/'), {
            username: productName
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
            <View>

                <TextInput label="Enter Data" style={{ margin: 16 }} onChangeText={setProductName}
                    value={productName} />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Button  title="Add"
                    onPress={() => addProductToFireStore()} />
            </View>
            <FlatList
                style={{ paddingBottom: 20, marginLeft: 5 }}
                data={users}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 5, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}>
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text>{item.username}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Button
                                variant="outlined"
                                title="Delete"
                                onPress={() => deleteData(item.id)}
                            />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
    },
});

export default AddProduct;