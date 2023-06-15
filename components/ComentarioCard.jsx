import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ProdutoCard(props) {

  return (
      <View style={styles.card}>
        <View>
          <Text style={styles.nome}>Usuário: {props.nomeUsuario}</Text>
          <Text style={styles.data}>Publicado: {props.dataPublicacao}</Text>
          <Text style={styles.comentario}>Comentario: {props.comentario}</Text>
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
    backgroundColor: "ligthgreen",
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
    fontSize: 22,
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
