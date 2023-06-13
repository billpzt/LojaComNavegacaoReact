import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ProdutoCard from "../components/ProdutoCard";
import React, { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const produtos = require('../assets/produtosLojaReactNative.json');

  const mapProdutos = produtos.map((prod, index) => ({
    key: index,
    value: prod,
  }));

  function navegar(item) {
    navigation.navigate("Detalhes", item);
  }

  const renderItem = ({ item }) => (
    <ProdutoCard
      path={item.value.produto.imageUrl}
      nome={item.value.produto.nome}
      preco={item.value.produto.preco}
      quantidade={item.value.produto.quant}
      action={() => navegar(item.value)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={mapProdutos} 
        renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
