import { Image, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./cardapio.style";
import { restaurante } from "../../constants/dados.js"
import icons from "../../constants/icons.js"
import Producto from "../../components/producto/producto.jsx";

function Cardapio(props) {

    return (
        <View style={styles.container}>
            <View style={styles.fotoContainer}>
                <Image source={restaurante.foto} style={styles.foto} resizeMode="contain" />

                <TouchableOpacity style={styles.backContainer} onPress={props.navigation.goBack}>
                    <Image source={icons.back2} style={styles.back} />
                </TouchableOpacity>

            </View>

            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.nome}>Nome do Estabelecimento</Text>
                    <Text style={styles.taxa}>Taxa de entrega: 50,00Mtn</Text>
                </View>
                <Image source={icons.favoritoFull} style={styles.favorito} />
            </View>
            <ScrollView>
                <View style={styles.location}>
                    <Image source={icons.location} style={styles.locationImg} />
                    <Text style={styles.endereco}>Avenida Angola, 543, Maputo</Text>
                </View>

                {
                    restaurante.cardapio.map((item) => {
                        return (
                            <View key={item.idCategoria} style={styles.categoriaContainer}>
                                <Text style={styles.categoria}>{item.categoria}</Text>

                                {
                                    item.itens.map((produto) => {
                                        return (
                                            <Producto key={produto.idProduto} foto={produto.foto}
                                                idProduto={produto.idProduto}
                                                nome={produto.nome}
                                                descricao={produto.descricao}
                                                valor={produto.valor} />

                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }

            </ScrollView>

        </View>
    )
}

export default Cardapio;