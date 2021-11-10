import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { ProductInfo } from "../components/product-info.component";

export const ProductsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
        <SafeAreaView style={styles.safearea}>
            <View style={styles.searchbar}>
                <Searchbar 
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={styles.container}>
                <ProductInfo search={searchQuery}/>
                <ProductInfo search={searchQuery}/>
                <ProductInfo search={searchQuery}/>
            </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    flex: 1,
    backgroundColor: '#007AFF',
    maxHeight: "80px",
    padding: "15px"
  },
  safearea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
});