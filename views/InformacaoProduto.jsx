import { Text, Image, StyleSheet, View } from 'react-native';

export default function InformacaoProduto( {route} ) {
    const produto = route.params;

    return (
        <View style={styles.container}>
            <Image 
              style={styles.image} 
              source={{ uri: produto.imageUrl }} />
            <Text>{produto.nome}</Text>
            <Text>{produto.descricao}</Text>
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