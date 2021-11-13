import styled from 'styled-components/native';
import { StatusBar, SafeAreaView, FlatList } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
   padding: ${(props) => props.theme.space[2]};
   background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

export const ProductList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10
    }
})``;