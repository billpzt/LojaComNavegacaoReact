import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import  ProdutoCard from '../components/ProdutoCard'
import React, { useEffect, useState } from 'react';

export default function Home({navigation}) {

    const produtos = [
        {nome: 'Mouse', preco: 53.78, quant: 1, path: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg'},
        {nome: 'Teclado', preco: 153.78, quant: 1, path: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg'},
        {nome: 'Monitor', preco: 253.78, quant: 1, path: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'},
        {nome: 'Celular', preco: 553.78, quant: 1, path: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'},
    ];

    // const [produtos, setProdutos] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/produtos")
    //     .then((res) => res.json())
    //     .then(data => setProdutos(data));
    // }, [])

    
    const mapProdutos = produtos
        .map((prod, index) => ({
            key: index, value: prod
        }));

    function navegar(item) {
        navigation.navigate('Detalhes', item);
    }
    
    const renderItem = ({item}) => (
        <ProdutoCard 
            path={item.value.path}
            nome={item.value.name}
            preco={item.value.preco}
            quantidade={item.value.quant}
            action={() => navegar(item.value)}
        />
    );
    
    return (
        <View style={styles.container}>
            <FlatList
                data={mapProdutos}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

{/* <Text>Home</Text>
            <Text>Nome: {nome}</Text>
            <Button 
                title="Ir para About" 
                onPress={() => {
                    navigation.navigate('About')
                }} 
            /> */}
