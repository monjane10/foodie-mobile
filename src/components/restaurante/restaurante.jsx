import { Image, View, Text, TouchableOpacity} from "react-native";
import { styles } from "./restaurante.style.js";

function Restaurante(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
            <Image source={props.logotipo} style={styles.logo} />
            <View style={styles.textos}>
             <Text style={styles.nome}>{props.nome}</Text>
             <Text style={styles.endereco}>{props.endereco}</Text>
             </View>
             <TouchableOpacity>
             <Image source={props.icone} style={styles.favorito} />
             </TouchableOpacity>
                
        </TouchableOpacity>
    )
}

export default Restaurante;