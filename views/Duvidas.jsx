import { Text, Image, StyleSheet, View } from 'react-native';

export default function Duvidas( {route} ) {
    const produto = route.params;

    return (
        <View style={styles.container}>
            <Text>Tem em todas as cores?</Text>
            <Text>Quanto custa?</Text>
            <Text>É bom?</Text>
            <Text>Pra que serve?</Text>
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