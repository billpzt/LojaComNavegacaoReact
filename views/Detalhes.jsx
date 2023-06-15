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
    console.log( item );
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} style={styles.navigator}>
            <Tab.Screen name="Info (Detalhes)">
                {() => <InformacaoProduto produto={item.produto}/>}
            </Tab.Screen>
            <Tab.Screen name="Especificacoes">
                {() => <Especificacoes produto={item.produto.detalhes}/>}
            </Tab.Screen>
            <Tab.Screen name="Vendedor">
                {() => <Vendedor vendedor={item.vendedor}/>}
            </Tab.Screen>
            <Tab.Screen name="Comentarios">
                {() => <Comentarios comentarios={item.comentarios}/>}
            </Tab.Screen>
            {/* <Tab.Screen 
            name="Comentarios" 
            component={Comentarios}
            initialParams={item.comentarios} /> */}
            <Tab.Screen 
                name="Duvidas" 
                component={Duvidas}
                initialParams={item.duvidas} />
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