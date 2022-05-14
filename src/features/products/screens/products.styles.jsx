import styled from "styled-components/native";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

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
    padding: 10,
  },
})``;
