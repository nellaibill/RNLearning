import { View, Text } from 'react-native'
import React from 'react'
import Product from './Product';
import { useState, useCallback } from 'react'
const ProductList = () => {
    const [products, setProducts] = useState(["Test1", "Test2"]);
    const [cart, setCart] = useState(0);
    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart])
    return (
        <View>
            <Text>Cart {cart}</Text>
            {products.map((product, i) => { return <Product addToCart={addToCart} name={product} key={i} /> })}
        </View>
    )
}

export default ProductList