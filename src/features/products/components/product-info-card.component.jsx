import React from 'react';
import {
    StockBarView,
    StockBar,
    ProductCard,
    CardCover,
    Title,
    SubTitle,
    InfoText,
    SupplierBadge,
    InfoBadge,
    InfoView,
    TopBadgeView,
    BottomBadgeView
} from './product-info-card.styles';
import { Colors } from 'react-native-paper';

export const ProductInfoCard = ({ search, product = {} }) => {
    const {
        objectId = 1,
        item = 'ZIP-X',
        description = 'Adult Ski Jackets Extra',
        barcode = "121001",
        photos = [
            "https://res.cloudinary.com/outdoor-warehouse/image/upload/c_fill,f_auto,q_auto:good,w_750/v1575961299/uploads/assets/1005884-b-d5Z.jpg"
        ],
        supplier = 'Gebotex',
        supplierCode = 12,
        price = 88.82,
        stockReceived = 550,
        stockProcessed = 296,
        itemsProcessed = 353,
        avgWeight = (stockProcessed / itemsProcessed).toFixed(2),
        avgPrice = (avgWeight * price).toFixed(2)
    } = product;

    return (
        <>
            <ProductCard elevation={5}>
                <TopBadgeView>
                    <SupplierBadge>{supplier} {supplierCode}</SupplierBadge>
                    <SupplierBadge>{barcode}</SupplierBadge>
                </TopBadgeView>
                
                    <CardCover key={objectId} source={{ uri: photos[0] }} alt='image' />
                    <InfoView>
                        <Title>{item}</Title>    
                        <SubTitle>{description}</SubTitle>
                        <InfoText>Price: R {price} /kg  | Avg Item Weight: {avgWeight}kg  |  #Items: {itemsProcessed}</InfoText>
                        <StockBarView>
                            <StockBar 
                                progress={(stockReceived - stockProcessed) / stockReceived} 
                                color={(((stockReceived - stockProcessed) / stockReceived).toFixed(2) < 0.25) ? Colors.red500 : Colors.blue500 }
                            />
                            <InfoText>
                                Stock Available: {stockReceived - stockProcessed} of {stockReceived}kg  -  {(((stockReceived - stockProcessed) / stockReceived) * 100).toFixed(2)}%
                            </InfoText>
                        </StockBarView>
                        <BottomBadgeView>
                            <InfoBadge>Available Stock: {stockReceived - stockProcessed}kg</InfoBadge>
                            <InfoBadge>Avg Price: R {avgPrice}</InfoBadge>
                        </BottomBadgeView>
                    </InfoView>
            </ProductCard>
        </>
    )
}