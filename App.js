import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ProductsScreen } from './src/features/products/screens/product.screen';

export default function App() {
  return (
    <>
      <ProductsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
