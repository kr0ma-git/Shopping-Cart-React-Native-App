import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useState } from 'react';

import styles from './styles'
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  // Since we have one TextInput for each product, we need to create an object to store all quantity data.
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  const PRODUCTS = [
    {id: 1, name: 'Notebook', price: 3.50},
    {id: 2, name: 'Pen Set', price: 5.00},
    {id: 3, name: 'Backpack', price: 29.99},
    {id: 4, name: 'Water Bottle', price: 12.00},
  ]

  const handleQuantityChange = (productId, quantity) => {
    // Takes all previously acquired (or none) quantities from the quantities useState and updates the quantity of that specific product only.
    setQuantities(prev => {
      return {
        ...prev,
        [productId]: quantity
      }
    })
  }

  const handleAddToCart = (productId) => {
    const quantity = Number(quantities[productId]);
    let product = null;

    // Finding the product in the product list for use later.
    for (let i = 0; i < PRODUCTS.length; i++) { // or just const product = PRODUCT.find(p => p.id === productId);
      if (PRODUCTS[i].id == productId)
        product = PRODUCTS[i];
    }

    if (product != null) {
       setCart(prev => {
        let existingItem = null;

        // Check if the product is already in the cart
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].id == productId) {
            existingItem = prev[i];
          }
        }

        // If it is, update the previous cart to add new quantity.
        if (existingItem != null) {
          return prev.map(item => 
            // Update the quantity by finding the product in the cart
            item.id == productId ? {...item, quantity: item.quantity + quantity} : item
          );
        }

        // Otherwise, add it to the cart with the product information and the quantity.
        return [...prev, {...product, quantity}];
       })
    }
  }

  const handleDeleteFromCart = (productId) => {
    setCart(prev => {
      const newCart = [];

      for (let i = 0; i < prev.length; i++) { // Or you can just filter the items that don't have that specific id.
        if (prev[i].id != productId) {
          newCart.push(prev[i]);
        }
      }

      return newCart;
    })
  }

  const handleCheckout = () => {
    alert('Order Placed!');

    setCart([]);
    setQuantities({});
  }

  return (
    // Using KeyboardAvoidingView so that when we pull up the keyboard it doesn't mess up the styling.
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.productList}>
            <ProductList products={PRODUCTS} quantities={quantities} onQuantityChange={handleQuantityChange} onAddToCart={handleAddToCart}></ProductList>
          </View>
          <View style={styles.spacerSmall}></View>
          {
            // TODO: Make the cart area
          }
          <View style={styles.cartContainer}>
            <Cart cart={cart} onPressDelete={handleDeleteFromCart} onPressCheckout={handleCheckout}></Cart>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}