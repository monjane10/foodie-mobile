import { TouchableOpacity, View, Image, Text, FlatList } from "react-native";
import { styles } from "./detalhe-pedido.style";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Producto from "../../components/producto/producto.jsx";


function DetalhePedido() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backContainer}>
                    <Image source={icons.back} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Detalhe do producto</Text>
            </View>

            <FlatList data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return  <Producto key={item.idItem}
                                foto={item.foto}
                                nome={item.nome}
                                descricao={item.descricao}
                                valor={item.vlTotal}
                 />
            }}   />

            <View style={styles.footer}>
                <View style={styles.valores}>
                    <Text style={styles.total}>Resumo dos preços</Text>
                </View>

                <View style={styles.valores}>
                    <Text style={styles.valor}>Subtotal</Text>
                      <Text style={styles.valor}>560Mtn</Text>
                </View>
                 <View style={styles.valores}>
                    <Text style={styles.valor}>Taxa de entrega</Text>
                      <Text style={styles.valor}>40Mtn</Text>
                </View>
                 <View style={styles.valores}>
                    <Text style={styles.valor}>Total</Text>
                      <Text style={styles.total}>600Mtn</Text>
                </View>

            </View>
        </View>
    )
}

export default DetalhePedido;