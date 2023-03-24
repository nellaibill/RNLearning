import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";
const Product = ({ name, addToCart }) => {
    console.log("product name",name);
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', padding: 5, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text>{name}</Text>

                </View>
                <Button title="Add" onPress={addToCart} />

            </View>
        </ScrollView>
    )
}

export default React.memo(Product)