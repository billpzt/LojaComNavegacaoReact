import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function RespostaCard(props) {

  return (
      <View style={styles.card}>
        <View>
        <Text style={styles.comentario}>{props.resposta}</Text>
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
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "#BBD1EA",
    display: "flex",
    flexDirection: "row",
    width: 300
  },
  nome: {
    // fontSize: 10,
  },
  publicado: {},
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
