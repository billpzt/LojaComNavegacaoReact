import { Text, View, StyleSheet } from "react-native";
import VendedorCard from "../components/VendedorCard";

export default function Vendedor({ vendedor }) {
  // const vendedor = route.params;
  console.log(vendedor);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vendedor</Text>
      </View>
      <View style={styles.content}>
        <VendedorCard
          nome={vendedor.nome}
          telefone={vendedor.telefone}
          email={vendedor.email}
          nota={vendedor.nota}
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
