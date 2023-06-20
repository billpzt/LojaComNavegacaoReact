import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DuvidaCard(props) {

  return (
      <View style={styles.card}>
        <View>
        <Text style={styles.comentario}>{props.duvida}</Text>
          <Text style={styles.nome}>{props.nomeUsuario}</Text>
          <Text style={styles.data}>{props.dataPublicacao}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 8,
    boxShadow: "5px 5px 5px #778da9",
    backgroundColor: "#a1c6ea",
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
  nota: {},
});

{
  /* <Text>Home</Text>
            <Text>Nome: {nome}</Text>
            <Button 
                title="Ir para About" 
                onPress={() => {
                    navigation.navigate('About')
                }} 
            /> */
}
