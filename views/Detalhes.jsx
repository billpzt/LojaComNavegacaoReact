import { Text } from "react-native";

export default function Detalhes( {route} ) {
    const produto = route.params;
    console.log(produto);
    return (
        <Text>{produto.nome}</Text>
    )
}