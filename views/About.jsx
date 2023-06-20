import { Text, StyleSheet, View, Button } from 'react-native';

export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Esse aplicativo é uma loja com vários produtos incríveis!</Text>
            <Button 
                title="Ir para Home" 
                onPress={() => {
                    navigation.navigate('Home', {
                        nome: 'Nikola Tesla'
                    })
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