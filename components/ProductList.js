import React from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";

import styles from '../styles';

export default function ProductList(props) {
    return (
        <>
            {
                // Instead of mapping, you can also use FlatList which will only render items that are visible on the screen.
            }
            {props.products.map((product, index) => {
                return (
                    <View key={index} style={styles.productCard}>
                        <View style={styles.imagePortrait}></View>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>Price: Php {product.price}</Text>
                        <View style={styles.cardBottom}>
                            <TextInput placeholder='Qty.' style={styles.qtyTextInput} value={props.quantities[product.id] || ''} onChangeText={value => props.onQuantityChange(product.id, value)} keyboardType='numeric'></TextInput>
                            <TouchableOpacity style={styles.buttonSmall} onPress={() => {
                                if (!props.quantities[product.id]) {
                                    alert("Please input quantity");
                                } else {
                                    props.onAddToCart(product.id)
                                }
                                }}>
                                <Text style={styles.textSmall}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </>
    );
}