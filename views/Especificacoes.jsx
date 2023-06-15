import { Text, Image, StyleSheet, View } from "react-native";

export default function Especificacoes({ produto }) {
  // const produto = route.params;
  // console.log(produto);

  return (
    <View style={styles.container}>
      {/* <Text>{produto.nome}</Text> */}
      <Text>Tamanho: {produto.tamanho}</Text>
      <Text>Peso: {produto.peso}g</Text>
      <Text>Altura: {produto.altura}cm</Text>
      <Text>Cor: {produto.cor}</Text>
    </View>
  );
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
