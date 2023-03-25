import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import { realtimeDbConfig } from '../firebase/realtimeDbConfig'
import { firestoreDB } from '../firebase/firestoreConfig';
import { ref, set } from "firebase/database";
import { collection, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import ActionItems from './ActionItems';
const AddTask = () => {
    const [productName, setProductName] = React.useState('');
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const getAlldata = () => {
        getDocs(collection(firestoreDB, "products")).then(docSnap => {
            let products = [];
            docSnap.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id })
            });
            console.log("actionItems", products);
            setproducts(products);
            setLoading(false);
        });
    }
    const deleteData = useCallback((id) => {
        deleteDoc(doc(firestoreDB, "products", id))
        getAlldata();
    }, [])
    useEffect(() => {
        getAlldata();
    }, []);
    const addProductToFireStore = () => {
        addDoc(collection(firestoreDB, "products"), {
            product_name: productName
        }).then(() => {
            getAlldata();
            setProductName('');
        }).catch((error) => {
            console.log(error);
        });
    }
    const addProducttoFireBaseRealTimeDB = () => {
        set(ref(realtimeDbConfig, 'products/'), {
            product_name: productName
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
                <TextInput label="Enter action item" style={{ margin: 16 }} onChangeText={setProductName}
                    value={productName} />
            </View>
            <View style={{ alignItems: 'center' }} >
                <Button title="Add"
                    onPress={() => addProductToFireStore()} />
            </View>
            <FlatList
                style={{ paddingBottom: 20, marginLeft: 5 }}
                data={products}
                renderItem={({ item }) => (
                    <ActionItems deleteData={deleteData} item={item} />
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

export default AddTask;