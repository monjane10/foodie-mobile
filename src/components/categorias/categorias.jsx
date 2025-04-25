import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias(props){
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            props.dados.map((categoria, index) => {
                return <View key={index} style={styles.categoria}>
                    <TouchableOpacity>
                    <Image source={categoria.icone} style={styles.icone} />
                    <Text style={styles.descricao}>{categoria.descricao}</Text>
                    </TouchableOpacity>
                </View> 
            })
        }
            </ScrollView>
        </View>
    )
}

export default Categorias;