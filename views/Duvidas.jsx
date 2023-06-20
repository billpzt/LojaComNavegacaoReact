import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import DuvidaCard from "../components/DuvidaCard.jsx";
import RespostaCard from "../components/RespostaCard.jsx";

export default function Duvidas({ duvidas }) {
  // const comentarios = route.params;
  console.log(duvidas);

  const mapDuvidas = duvidas.map((duvida) => ({
    key: duvida._id,
    value: duvida,
  }));

  const renderItem = ({ item }) => (
    <View>
      <DuvidaCard
        nomeUsuario={item.value.nome}
        dataPublicacao={item.value.registered}
        duvida={item.value.pergunta}
      />
      <FlatList
        data={item.value.resposta}
        renderItem={({ item }) => (
          <RespostaCard
            nomeUsuario={item.nome}
            dataPublicacao={item.registered}
            resposta={item.resposta}
          />
        )}
        keyExtractor={(item, index) => `${item._id}_${index}`}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dúvidas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={mapDuvidas}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
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
    alignItems: "center",
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
