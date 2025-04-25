import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./banners.style.js";

function Categorias(props){
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            props.dados.map((categoria, index) => {
                return <View key={index} style={styles.categoria}>
                    <Image source={categoria.icone} style={styles.icone} />
                    <Text style={styles.descricao}>{categoria.descricao}</Text>
                </View> 
            })
        }
            </ScrollView>
        </View>
    )
}

export default Categorias;