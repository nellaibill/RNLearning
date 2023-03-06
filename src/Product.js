import { View, Text, Button } from 'react-native'
import React from 'react'

const Product = ({ name,addToCart }) => {
    console.log("ProductPage" + name);
    return (
        <View>
            <Text>{name}</Text>
            <Button title="Add to cart" onPress={addToCart}></Button>
        </View>
    )
}

export default React.memo(Product)