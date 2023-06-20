import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import ComentarioCard from "../components/ComentarioCard.jsx";

export default function Comentarios({ comentarios }) {
  // const comentarios = route.params;
  console.log(comentarios);

  const mapComentarios = comentarios.map((comentario) => ({
    key: comentario._id,
    value: comentario,
  }));

  const renderItem = ({ item }) => (
    <ComentarioCard
      nomeUsuario={item.value.nome}
      dataPublicacao={item.value.registered}
      comentario={item.value.comentario}
      nota={item.value.nota}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comentários</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={mapComentarios}
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
