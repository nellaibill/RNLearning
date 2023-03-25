
import { View, Text, Button } from 'react-native'
import React from 'react'
const ActionItems = ({ item, deleteData }) => {
    return (
        <View>
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
        </View>
    )
}

export default ActionItems
