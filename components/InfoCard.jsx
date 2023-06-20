import { Text, Image, View, StyleSheet } from "react-native";

export default function InfoCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.topPart}>
        <Image style={styles.image} source={{ uri: props.path }} />
        <Text style={styles.nome}>{props.nome}</Text>
      </View>
      <View>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "#BBD1EA",
    display: "flex",
    flexDirection: "column",
    width: 355,
    height: 100,
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 5
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nome: {
    fontSize: 20,
  },
  descricao: {},
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
