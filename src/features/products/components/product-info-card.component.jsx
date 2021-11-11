import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Cover, Badge, Button} from 'react-native-paper';

export const ProductInfo = ({ search, product = {} }) => {
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
        items_processed = 273,
        avg_weight = (stock_processed / items_processed).toFixed(2),
        avg_price = (avg_weight * price).toFixed(2)
    } = product;

    return (
        <>
            <Card elevation={5} style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Badge style={{ backgroundColor: 'orange' }}>{supplier} {supplier_code}</Badge>
                        <Badge style={styles.badge}>Stock: {stock_received - stock_processed}kg</Badge>
                        <Badge style={styles.badge}>Avg Price: R {avg_price}</Badge>
                    </View>
                    <View style={styles.content}>
                        <Card.Cover key={objectId} style={styles.cover} source={{ uri: photos[0] }} alt='none' />
                        <View style={styles.info}>
                            <Title style={styles.title}>{item}</Title>    
                            <Text style={styles.subheading}>{description}</Text>
                            <Text style={styles.paragraph}>Price: R {price} /kg  | Avg Item Weight: {avg_weight}kg</Text>
                        </View>
                    </View>
                    {/* <Card.Actions style={styles.actions}>
                        <Button style={styles.button} color='#007AFF' onPress={() => { console.log('Process Button Pressed') }}>Process</Button>
                        <Button style={styles.button} color='#007AFF' onPress={() => { console.log('Edit Button Pressed') }}>Edit</Button>
                    </Card.Actions> */}
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: { margin: 5, backgroundColor: 'white'},
    title: { color: '#007AFF', fontWeight: 'bold'},
    subheading: { color: '#007AFF', fontWeight: 'bold', fontSize: 16},
    paragraph: { fontSize: 14, color: '#007AFF95'},
    button: { marginLeft: 8, width: 100, backgroundColor: '#007AFF20' },
    info: { padding: 15, color: '#007AFF'},
    badge: { marginTop: 5, marginRight: 5, color: '#fff', backgroundColor: '#007AFF', fontWeight: 'bold', fontSize: 10 }
})