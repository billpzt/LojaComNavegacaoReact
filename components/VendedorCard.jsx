import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function VendedorCard(props) {

  return (
      <View style={styles.card}>
        <View>
        <Text style={styles.nome}>Nome: {props.nome}</Text>
          <Text style={styles.telefone}>Telefone: {props.telefone}</Text>
          <Text style={styles.email}>Email: {props.email}</Text>
          <Text style={styles.nota}>Nota: {props.nota}</Text>
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
  nome: {
    fontSize: 14,
  },
  telefone: {
    fontSize: 12
  },
  email: {
    fontSize: 12
  },
  nota: {
    fontSize: 12
  },
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
