import { Text, StyleSheet, View, Button } from 'react-native';

export default function Home( {navigation, route} ) {
    let nome;
    try {
        nome = route.params.nome;
    } catch(e) {}

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Nome: {nome}</Text>
            <Button 
                title="Ir para About" 
                onPress={() => {
                    navigation.navigate('About')
                }} 
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