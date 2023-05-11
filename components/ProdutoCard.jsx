import { Text, Image, View } from 'react-native';

export default function ProdutoCard(props) {
    <View style={styles.card}>
        <View>
            <Image 
                style={styles.image}
                source={require(props.path)}
            />
        </View>
        <View>
            <Text style={styles.nome}>{props.nome}</Text>
            <Text style={styles.preco}>{props.preco}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
    },
    image: {
    },
    nome: {
    },
    preco: {
    }
});
