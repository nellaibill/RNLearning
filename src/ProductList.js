import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Product from './Product';
import { useState, useCallback, useTransition, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler';
const ProductList = () => {
    const [isPending, startTransition] = useTransition();
    const [cart, setCart] = useState(0);
    const [filterTerm, setFilterTerm] = useState('');
    const [products, setProducts] = useState([]);
    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart])
    useEffect(() => {
        setProducts(generateProducts());
    }, [])
    function generateProducts() {
        const products = [];
        for (let i = 0; i < 50; i++) {
            products.push(`Product ${i + 1}`);
        }
        return products;
    }
    function filterProducts(filterTerm) {
        if (!filterTerm) {
            return generateProducts();
        }
        return generateProducts().filter((product) => product.includes(filterTerm));
    }
    function updateFilterHandler(event) {
        startTransition(() => {
            setProducts(filterProducts(event));
        });
        setFilterTerm(event);
    }
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <TextInput style={styles.input}
                    onChangeText={(text) => updateFilterHandler(text)}
                ></TextInput>
                {products.map((product, i) => { return <Product addToCart={addToCart} name={product} key={i} /> })}
                <Text> Total Cart  {cart}</Text>
            </View></ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 10
    },
});
export default ProductList