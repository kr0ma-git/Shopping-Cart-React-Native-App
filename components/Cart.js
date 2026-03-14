import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles';

export default function Cart(props) {
    let total = 0;

    for (let i = 0; i < props.cart.length; i++) {
        total += props.cart[i].quantity * props.cart[i].price;
    }

    return (
        <>
            <Text style={{fontFamily: 'serif', fontWeight: 'bold'}}>Your Shopping Cart</Text>
            {props.cart.length <= 0 
            ? (
                <Text>No Items in Cart</Text>
            ) : 
                <>
                    {props.cart.map((cartItem, index) => {
                            return (
                                <View key={index} style={styles.cartItem}>
                                    <Text style={styles.cartItemName}>
                                        {cartItem.name} x{cartItem.quantity}
                                    </Text>
                                    <Text style={styles.cartItemPrice}>
                                        Php. {cartItem.price * cartItem.quantity}
                                    </Text>
                                    <TouchableOpacity onPress={() => props.onPressDelete(cartItem.id)} style={styles.deleteButton}>
                                        <Text style={{color: 'white', fontWeight: 'bold'}}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    <Text style={styles.total}>Total: {total.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.checkOut} onPress={() => props.onPressCheckout()}>
                        <Text style={{fontSize: 17, fontFamily: 'serif', color: 'white'}}>Checkout</Text>
                    </TouchableOpacity>
                </>
            }
        </>
    )
}