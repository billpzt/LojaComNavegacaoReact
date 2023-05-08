import { StackActions } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Home from './views/Home'
// import About from './views/About'
import { ProdutoCard } from './views/ProdutoCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Produto1'
          component={ProdutoCard}
        />
        <Stack.Screen
          name='Produto2'
          component={ProdutoCard}
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
