import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Vendedor from "./Vendedor";
import InformacaoProduto from "./InformacaoProduto";



const Tab = createBottomTabNavigator();

export default function Detalhes( {route} ) {
    const produto = route.params;
    console.log(produto);
    return (
        <View style={styles.container}>
            <Text>{produto.nome}</Text>
            <Tab.Navigator>
                <Tab.Screen name="Info" component={InformacaoProduto} />
                <Tab.Screen name="Vendedor" component={Vendedor} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // width: '1vw'
    },
});