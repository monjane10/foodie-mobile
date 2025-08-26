import { TouchableOpacity, View, Image, Text, FlatList, Alert } from "react-native";
import { styles } from "./checkout.style.js";
import { pedido } from "../../constants/dados.js";
import Producto from "../../components/producto/producto.jsx";
import Button from "../../components/button/button.jsx";


function Checkout(props) {

    function ClickDelete(){
        Alert.alert("OK")
    }
    return (
        <View style={styles.container}>
            <FlatList data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return  <Producto key={item.idItem}
                                foto={item.foto}
                                nome={item.nome}
                                descricao={item.descricao}
                                valor={item.vlTotal}
                                onClickDelete={ClickDelete}
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
                 <View style={styles.containerBtn}>
                <Button texto="Finalizar Pedido" />
            </View>
            </View>

           
        </View>
    )
}

export default Checkout;