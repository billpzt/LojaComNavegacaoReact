import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ComentarioCard(props) {

  return (
      <View style={styles.card}>
        <View>
        <Text style={styles.comentario}>{props.comentario}</Text>
          <Text style={styles.nome}>{props.nomeUsuario}</Text>
          <Text style={styles.data}>{props.dataPublicacao}</Text>
          <Text style={styles.nota}>Nota: {props.nota}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 8,
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "#A1C6EA",
    display: "flex",
    flexDirection: "row",
    width: 300
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  nome: {
    fontSize: 14,
  },
  data: {
    fontSize: 12
  },
  comentario: {},
  nota: {
    fontSize: 10,
  },
});
