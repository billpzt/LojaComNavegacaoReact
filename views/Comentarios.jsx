import { Text, Image, StyleSheet, View } from 'react-native';

export default function Comentarios( {route} ) {
    const produto = route.params;

    return (
        <View style={styles.container}>
            <Text>Muito bom, adorei!</Text>
            <Text>Muito bom, adorei!</Text>
            <Text>Muito bom, adorei!</Text>
            <Text>Muito bom, adorei!</Text>
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