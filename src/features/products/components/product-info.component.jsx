import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Cover, Badge, Button} from 'react-native-paper';

export const ProductInfo = ({ search, product = {} }) => {
    const {
        item = 'ZIP-X',
        description = 'Adult Ski Jackets Extra',
        photos = [
            "https://res.cloudinary.com/outdoor-warehouse/image/upload/c_fill,f_auto,q_auto:good,w_750/v1575961299/uploads/assets/1005884-b-d5Z.jpg"
        ],
        supplier = 'Gebotex',
        supplier_code = 12,
        price = 88.82,
        weight = 250,
    } = product;

    return (
        <>
            <View style={styles.container}>
                <Card style={styles.card} >
                    <Badge style={styles.badge}>{weight} kg</Badge>
                    <Card.Content style={styles.content}>
                        <Card.Cover style={styles.image} source={{uri: photos[0]}} alt='none' />
                        <View style={styles.info}>
                            <Title style={styles.title}>{item}</Title>    
                            <Text>{description}</Text>
                            <Text>{supplier} {supplier_code}</Text>
                            <Text>R {price} /kg  |  {weight}kg</Text>
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <Button style={styles.action} color='#007AFF' onPress={() => { console.log('Process Button Pressed') }}>Process</Button>
                        <Button style={styles.action} color='#007AFF' onPress={() => { console.log('Edit Button Pressed') }}>Edit</Button>
                    </Card.Actions>
                </Card>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 'auto',
        width: '100%',
        border: '1px solid',
        padding: '5px',
        shadowColor: 'black',
        shadowRadius: '5px',
    },
    image: {
        height: '100px',
        width: '100px',
        border: '1px solid #007AFF',
        borderRadius: '5px',
    },
    container: {
        paddingTop: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        width: '100%',
        flex: 1,
    },
    info: {
        paddingLeft: '15px',
        // justifyContent: 'center'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    badge: {
        backgroundColor: '#007AFF',
        fontWeight: 'bold',
        fontSize: '12px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    title: {
        fontWeight: 'bold',
        color: '#007AFF'
    },
    action: {
        minWidth: '100px',
        margin: '5px',
    }
        
})