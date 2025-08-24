import { FlatList, View } from "react-native";
import { styles } from "./busca.style";
import { restaurantes } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";


function Busca() {
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
                        icone={icons.favoritoFull} />
                    </View>
                }}

                contentContainerStyle={styles.containerList}

                ListEmptyComponent={() => {
                    return <View style={styles.vazio}>
                        <Restaurante logotipo={icons.empty}
                        nome="Nenhum favorito encontrado"
                        endereco="Adicione um restaurante aos favoritos"
                         />
                    </View>
                }}
            />
        </View>
    )
}

export default Busca;