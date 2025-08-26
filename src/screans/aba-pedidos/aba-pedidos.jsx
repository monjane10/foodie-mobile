import { FlatList, View } from "react-native";
import { pedidos } from "../../constants/dados.js";
import { styles } from "./aba-pedidos.style.js";
import icons from "../../constants/icons.js";
import Pedido from "../../components/pedido/pedido.jsx";


function AbaPedidos(props){
   function DetalhePedido() {
        props.navigation.navigate("detalhe-pedido")
   }

    return (
        <View style={styles.container}>
           <FlatList data={pedidos} 
                keyExtractor={(ped) => ped.id}
                shadowVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <View>
                        <Pedido logotipo={item.logotipo}
                        nome={item.nome}
                        data={item.dt_pedido}
                        vl_total={item.vl_total}
                        status={item.status}
                        icone={icons.remove}
                        onClickPedido={DetalhePedido }
                         />
                    </View>
                }}

                contentContainerStyle={styles.containerList}

                ListEmptyComponent={() => {
                    return <View style={styles.vazio}>
                        <Restaurante logotipo={icons.empty}
                        nome="Ainda nao fez nenhum pedido"
                        endereco="Adicione um item  aos carinho"
                         />
                    </View>
                }}
            />
        </View>
    )
}

export default AbaPedidos;