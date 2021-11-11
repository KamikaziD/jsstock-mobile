import React from 'react';
import styled from 'styled-components/native';
import { Card, Badge } from 'react-native-paper';

const ProductCard = styled(Card)`
    background-color: #fff;

`;

const CardCover = styled(Card.Cover)`
    margin: 5px;
    background-color: #fff;
`;

const Title = styled.Text`
    color: #007AFF; 
    fontWeight: bold;
    font-size: 24px;
`;

const SubTitle = styled.Text`
    color: #007AFF;
    font-weight: bold;
    font-size: 16px;
`;

const InfoText = styled.Text`
    font-size: 14px;
    color: #007AFF95;
`;

const SupplierBadge = styled(Badge)`
    background-color: orange;
    margin-right: 5px;
    font-weight: bold;
    margin-top: 5px;
    font-size: 12px;
`;
const InfoBadge = styled(Badge)`
    background-color: #007AFF;
    margin: 5px;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 12px;
`;

const InfoView = styled.View`
    padding: 15px;
    color: #007AFF;
`;

const TopBadgeView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

const BottomBadgeView = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const ProductInfoCard = ({ search, product = {} }) => {
    const {
        objectId = 1,
        item = 'ZIP-X',
        description = 'Adult Ski Jackets Extra',
        photos = [
            "https://res.cloudinary.com/outdoor-warehouse/image/upload/c_fill,f_auto,q_auto:good,w_750/v1575961299/uploads/assets/1005884-b-d5Z.jpg"
        ],
        supplier = 'Gebotex',
        supplier_code = 12,
        price = 88.82,
        stock_received = 550,
        stock_processed = 254,
        items_processed = 343,
        avg_weight = (stock_processed / items_processed).toFixed(2),
        avg_price = (avg_weight * price).toFixed(2)
    } = product;

    return (
        <>
            <ProductCard elevation={5}>
                <TopBadgeView>
                    <SupplierBadge>{supplier} {supplier_code}</SupplierBadge>
                </TopBadgeView>
                
                    <CardCover key={objectId} source={{ uri: photos[0] }} alt='image' />
                    <InfoView>
                        <Title>{item}</Title>    
                        <SubTitle>{description}</SubTitle>
                        <InfoText>Price: R {price} /kg  | Avg Item Weight: {avg_weight}kg</InfoText>
                    </InfoView>
                    <BottomBadgeView>
                        <InfoBadge>Available Stock: {stock_received - stock_processed}kg</InfoBadge>
                        <InfoBadge>Avg Price: R {avg_price}</InfoBadge>
                    </BottomBadgeView>
            </ProductCard>
        </>
    )
}