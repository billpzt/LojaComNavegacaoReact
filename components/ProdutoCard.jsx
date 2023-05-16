import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ProdutoCard(props) {
    const { navigation, route } = props;
    const navegador = () => {navigation.navigate('Detalhes', props)};

  return (
    <TouchableOpacity
        onPress={() => navegador()}>
      <View style={styles.card}>
        <View>
          <Image style={styles.image} source={{ uri: props.path }} />
        </View>
        <View>
          <Text style={styles.nome}>{props.nome}</Text>
          <Text style={styles.preco}>R${props.preco}</Text>
          <Text style={styles.quant}>Qtd: {props.quantidade}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 8,
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "lightblue",
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
  preco: {},
  quant: {}
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
