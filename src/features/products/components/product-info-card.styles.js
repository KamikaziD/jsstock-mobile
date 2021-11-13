import styled from 'styled-components/native';
import { Card, ProgressBar, Badge } from 'react-native-paper';

export const StockBarView = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
`;

export const StockBar = styled(ProgressBar)`
    color: ${(props) => props.theme.colors.brand.primary};
    height: 10px;
`;

export const ProductCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    border-radius: ${(props) => props.theme.sizes[1]};
`;

export const CardCover = styled(Card.Cover)`
    margin: ${(props) => props.theme.space[1]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.brand.primary};
    fontWeight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: ${(props) => props.theme.fonts.heading};
`;

export const SubTitle = styled.Text`
    color: ${(props) => props.theme.colors.brand.secondary};
    fontWeight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.body};
    font-family: ${(props) => props.theme.fonts.body};
`;

export const InfoText = styled.Text`
    fontWeight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.text.alternate};
`;

export const SupplierBadge = styled(Badge)`
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    margin-right: ${(props) => props.theme.space[2]};
    fontWeight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.body};
    margin-top: ${(props) => props.theme.space[2]};
`;
export const InfoBadge = styled(Badge)`
    background-color: ${(props) => props.theme.colors.brand.primary};
    margin: ${(props) => props.theme.space[1]};
    margin-bottom: ${(props) => props.theme.space[2]};
    fontWeight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.body};
`;

export const InfoView = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const TopBadgeView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const BottomBadgeView = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-top: ${(props) => props.theme.space[1]};
`;