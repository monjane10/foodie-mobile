import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./producto.style";
import icons from "../../constants/icons.js";


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

                {
                    props.onClickDelete &&
                    <TouchableOpacity
                        style={styles.deleteContainer}
                        onPress={() => props.onClickDelete()}
                    >
                        <Image source={icons.remove} style={styles.delete} />
                    </TouchableOpacity>
                }


            </View>
        </TouchableOpacity>
    )
}

export default Producto;