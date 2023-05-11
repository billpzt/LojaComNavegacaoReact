import { Text, Image, View, StyleSheet } from "react-native";

export default function ProdutoCard(props) {
    console.log(props);
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.image} source={{ uri: props.path }} />
      </View>
      <View>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.preco}>{props.preco}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {},
  nome: {},
  preco: {},
});
