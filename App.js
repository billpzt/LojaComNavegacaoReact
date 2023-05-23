import { StackActions } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './views/Home'
import About from './views/About'
import Detalhes from './views/Detalhes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
