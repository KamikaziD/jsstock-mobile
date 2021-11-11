import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { ProductInfoCard } from "../components/product-info-card.component";

const SearchContainer = styled.View`
   padding: 12px;
   background-color: #007AFF;
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: #eee;
  padding: 12px;
`;

export const ProductsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
        <SafeAreaView style={styles.container}>
            <SearchContainer>
                <Searchbar 
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            <ListContainer>
                <ProductInfoCard search={searchQuery}/>
            </ListContainer>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    
  },
  search: {
   
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
});