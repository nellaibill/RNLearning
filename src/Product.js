import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";
const Product = ({ item,deleteData }) => {
    console.log("ProductPage" + item.product_name);
    return (
        <View style={{ flexDirection: 'row', padding: 5, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text>{item.product_name}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
            <Button
                variant="outlined"
                title="Delete"
                onPress={() => deleteData(item.id)}
            />
        </View>
    </View>
    )
}

export default React.memo(Product)