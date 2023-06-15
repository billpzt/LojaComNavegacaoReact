import { Text, Image, StyleSheet, View, FlatList } from 'react-native';
import ComentarioCard from '../components/ComentarioCard.jsx';

export default function Comentarios( {comentarios} ) {
    // const comentarios = route.params;
    console.log(comentarios);

    const mapComentarios = comentarios.map((comentario) => ({
      key: comentario._id,
      value: comentario,
    }));

    const renderItem = ({ item }) => (
      <ComentarioCard
        nome={item.value.nome}
        dataPublicacao={item.value.registered}
        comentario={item.value.comentario}
        nota={item.value.nota}
      />
    );
    
    return (
      <View style={styles.container}>
        <FlatList 
          data={mapComentarios} 
          renderItem={renderItem}
          keyExtractor={(item) => item.key} />
      </View>
      );
        // <View style={styles.container}>
        //     <Text>Muito bom, adorei!</Text>
        //     <Text>Muito bom, adorei!</Text>
        //     <Text>Muito bom, adorei!</Text>
        //     <Text>Muito bom, adorei!</Text>
        // </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        // width: 500,
      },
    image: {
      width: 50,
      height: 50,
    //   marginRight: 10,
    },
  });