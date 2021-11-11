import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { ProductInfo } from "../components/product-info-card.component";

export const ProductsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar 
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <View style={styles.list}>
                <ProductInfo search={searchQuery}/>
            </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
  },
  search: {
    padding: 16,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
});