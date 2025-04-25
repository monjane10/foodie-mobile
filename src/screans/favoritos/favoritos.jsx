import { FlatList, View } from "react-native";
import { restaurantes } from "../../constants/dados.js";
import { styles } from "./favoritos.style.js";
import icons from "../../constants/icons.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";


function Favoritos(){
    return (
        <View style={styles.container}>
           <FlatList data={restaurantes} 
                keyExtractor={(restaurante) => restaurante.id}
                shadowVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <View>
                        <Restaurante logotipo={item.logotipo}
                        nome={item.nome}
                        endereco={item.endereco}
                        icone={icons.remove} />
                    </View>
                }}
            />
        </View>
    )
}

export default Favoritos;