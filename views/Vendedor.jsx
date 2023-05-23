import { Text } from 'react-native';

export default function Vendedor( {route} ) {
    const vendedor = route.params;
    return (
        <Text>Detalhes sobre o vendedor</Text>
    )
}