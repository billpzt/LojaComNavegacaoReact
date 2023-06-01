import { Text, Image, StyleSheet, View } from 'react-native';

export default function Especificacoes( {route} ) {
    const produto = route.params;

    return (
        <View style={styles.container}>
            <Text>Tamanho: </Text>
            <Text>Peso: </Text>
            <Text>Altura: </Text>
            <Text>Material: </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        // width: 500,
      },
    image: {
      width: 50,
      height: 50,
    //   marginRight: 10,
    },
  });