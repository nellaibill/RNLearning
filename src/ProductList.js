import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Product from './Product';
import { useState, useCallback, useTransition, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { generateProducts, filterProducts } from "./utils/helper_products";
import styles from './styles';

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

    function updateFilterHandler(event) {
        startTransition(() => {
            setProducts(filterProducts(event));
        });
        setFilterTerm(event);
    }
    return (
        <ScrollView>
            <View style={styles.pad10}>
                <TextInput style={styles.input}
                    onChangeText={(text) => updateFilterHandler(text)}
                ></TextInput>
                {products.map((product, i) => { return <Product addToCart={addToCart} name={product} key={i} /> })}
                <Text> Total Cart  {cart}</Text>
            </View></ScrollView>
    )
}

export default ProductList