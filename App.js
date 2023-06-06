import { StackActions } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './views/Home'
import About from './views/About'
import Detalhes from './views/Detalhes'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detalhes" component={Detalhes} />
        <Drawer.Screen name="Sobre" component={About} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Detalhes'
          component={Detalhes}
        />
        <Stack.Screen
          name='About'
          component={About}
        />
      </Stack.Navigator> */}
    </NavigationContainer>      
    </GestureHandlerRootView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
