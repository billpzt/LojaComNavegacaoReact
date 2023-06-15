import { Text, View } from 'react-native';

export default function Vendedor( {vendedor} ) {
    // const vendedor = route.params;
    console.log(vendedor);
    return (
        <View>
            <Text>Nome: {vendedor.nome}</Text>
            <Text>Telefone: {vendedor.telefone}</Text>
            <Text>E-mail: {vendedor.email}</Text>
            <Text>Nota: {vendedor.nota}</Text>
        </View>
    )
}