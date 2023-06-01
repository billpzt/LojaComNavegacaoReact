import { Text, View } from 'react-native';

export default function Vendedor( {route} ) {
    const vendedor = route.params;
    return (
        <View>
            <Text>{vendedor.nome}</Text>
            <Text>Detalhes sobre o vendedor</Text>
            <Text>Detalhes sobre o vendedor</Text>
            <Text>Detalhes sobre o vendedor</Text>
        </View>
    )
}