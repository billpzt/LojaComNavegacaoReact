import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Vendedor from "./Vendedor";
import InformacaoProduto from "./InformacaoProduto";
import Comentarios from "./Comentarios";
import Duvidas from "./Duvidas";
import Especificacoes from "./Especificacoes";


const Tab = createBottomTabNavigator();

export default function Detalhes( {route} ) {
    const item = route.params;
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} style={styles.navigator}>
            <Tab.Screen 
                name="Info (Detalhes)" 
                component={InformacaoProduto}
                initialParams={item.produto} />
            <Tab.Screen 
                name="Especificacoes" 
                component={Especificacoes}
                initialParams={item.especificacoes} />
            <Tab.Screen 
                name="Vendedor" 
                component={Vendedor}
                initialParams={item.vendedor} />
            <Tab.Screen 
                name="Duvidas" 
                component={Duvidas}
                initialParams={item.duvidas} />
            <Tab.Screen 
                name="Comentarios" 
                component={Comentarios}
                initialParams={item.comentarios} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: '100%'
    },
    screen: {
        width: 400
    },

});