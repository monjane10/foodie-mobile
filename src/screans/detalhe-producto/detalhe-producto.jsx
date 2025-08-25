import { Image, View, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./detalhe-producto.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";


function DetalheProducto(props) {

    return (
        <View style={styles.container}>
            <View style={styles.fotoContainer}>
                <Image source={icons.produto} style={styles.foto} resizeMode="cover" />

                <TouchableOpacity style={styles.backContainer} onPress={props.navigation.goBack}>
                    <Image source={icons.back2} style={styles.back} />
                </TouchableOpacity>

            </View>

            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.nome}>Pizza de Calabresa</Text>
                    <Text style={styles.descricao}>Massa artesanal, mussarela e calabresa. Serve de 3 a 4 pessoas.
                        Molho e tomate 100% natural e ingredientes selecionados.
                    </Text>
                    <Text style={styles.valor}>850 MTn</Text>
                </View>

            </View>

            <View style={styles.headerObs}>
                <Text style={styles.descricao}>Observações</Text>
                <TextInput style={styles.multiline}
                    multiline={true}
                    numberOfLines={5} />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity >

                    <Image source={icons.menos} style={styles.imgQtd} />
                </TouchableOpacity>
                <Text style={styles.qtd}>1</Text>

                <TouchableOpacity >
                    <Image source={icons.mais} style={styles.imgQtd} />
                </TouchableOpacity>

                <View style={styles.footerBtn}>
                    <Button texto="Adicionar" />
                </View>
            </View>





        </View>
    )
}

export default DetalheProducto;