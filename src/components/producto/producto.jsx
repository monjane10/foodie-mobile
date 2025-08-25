import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./producto.style";


function Producto(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.foto} style={styles.foto} />

            <View style={styles.textos}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.descricao}>{props.descricao}</Text>
            </View>
            <View >
                <Text style={styles.valor}>{new Intl.NumberFormat("pt-MZ", { style: "currency", currency: "MZN" }).format(props.valor)

                }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Producto;