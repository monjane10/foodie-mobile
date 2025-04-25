import { FlatList, View } from "react-native";
import { restaurantes } from "../../constants/dados.js";
import { styles } from "./favoritos.style.js";
import icons from "../../constants/icons.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";


function Favoritos(){
    const vazio =[];

    return (
        <View style={styles.container}>
           <FlatList data={vazio} 
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

export default Favoritos;