import { Text } from "react-native";

export default function Detalhes( {route} ) {
    console.log(route.params);
    return (
        <Text>Os detalhes ficam aqui</Text>
    )
}