import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./pedido.style.js";


function Pedido(props) {
    return (
        <TouchableOpacity style={styles.pedido} onPress={() => props.onClickPedido()}>
            <Image source={props.logotipo} style={styles.logotipo} />

            <View style={styles.textos}>
                <Text style={styles.nome}>{props.nome}</Text>
                <View style={styles.valores}>
                    
                    <Text style={styles.data}>{props.dt_pedido}</Text>
                    <Text style={styles.valor}>{new Intl.NumberFormat("pt-MZ", { style: "currency", currency: "MZN" }).format(props.vl_total)

                    }
                    </Text>
                </View>
                <Text style={styles.data}>{props.data}</Text>
                <Text style={styles.status}>{props.status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Pedido;