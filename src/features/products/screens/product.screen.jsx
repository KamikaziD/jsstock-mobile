import React, { useContext } from 'react'
import { Searchbar } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utility/safe-area.component';
import {
  SearchContainer,
  ProductList
} from './product.styles'
import { ProductInfoCard } from "../components/product-info-card.component"

import { ProductsContext } from '../../../services/products/products.context';

export const ProductsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const { isLoading, products, error } = useContext(ProductsContext)
    console.log(products);
  return (
    <>
        <SafeArea>
            <SearchContainer>
                <Searchbar 
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            <ProductList 
              data={products}
              renderItem={({ item }) => {
                return (
                  <Spacer position='bottom' size='large'>
                    <ProductInfoCard product={item}  search={searchQuery} />
                  </Spacer>
                )}
              }
              keyExtractor={(products) => products.objectId}
              
            />
                
        </SafeArea>
    </>
  );
};