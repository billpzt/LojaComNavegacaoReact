import { Text, StyleSheet, View, Button } from 'react-native';
import  ProdutoCard from '../components/ProdutoCard'

export default function Home() {
    
    return (
        <View style={styles.container}>
            <ProdutoCard 
                path={'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'}
                nome={'Celular 1'}
                preco={300.45}
            />
            <ProdutoCard 
                path={'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg'}
                nome={'Celular 2'}
                preco={3432.95}
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
