import { Text, Image, StyleSheet, View } from "react-native";

export default function Especificacoes({ produto }) {
  // const produto = route.params;
  // console.log(produto);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Especificações</Text>
      </View>

      {/* <Text>{produto.nome}</Text> */}
      <View style={styles.content}>
        <Text>Tamanho: {produto.tamanho}</Text>
        <Text>Peso: {produto.peso}g</Text>
        <Text>Altura: {produto.altura}cm</Text>
        <Text>Cor: {produto.cor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DAE3E5",
    // width: 500,
  },
  header: {
    width: "100%",
    backgroundColor: "#507DBC",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    //   marginRight: 10,
  },
  title: {
    fontSize: 30,
    backgroundColor: "#507DBC",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
