import { Text, Image } from 'react-native';

export default function InformacaoProduto( {route} ) {
    const produto = route.params;

    return (
        <View>
            <Image style={styles.image} source={{ uri: props.path }} />
            <Text>Informações sobre o produto aqui.</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      marginRight: 10,
    },
  });