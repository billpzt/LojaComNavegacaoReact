import { Text, Image, StyleSheet, View } from "react-native";
import InfoCard from "../components/InfoCard";

export default function InformacaoProduto({ produto }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Informações</Text>
      </View>
      <View style={styles.content}>
        <InfoCard
          path={produto.imageUrl}
          nome={produto.nome}
          descricao={produto.descricao}
        />
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
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    backgroundColor: "#507DBC",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  }
});
