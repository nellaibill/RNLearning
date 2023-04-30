import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";
import styles from './styles';
const Product = ({ name, addToCart }) => {
    console.log("product name", name);
    return (
        <ScrollView>
            <View style={styles.list_container}>
                <View style={styles.list_name}>
                    <Text>{name}</Text>

                </View>
                <Button styles={styles.button} title="Add" onPress={addToCart} />

            </View>
        </ScrollView>
    )
}

export default React.memo(Product)