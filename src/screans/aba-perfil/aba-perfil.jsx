import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./aba-perfil.style.js";
import icons from "../../constants/icons.js";


function AbaPerfil() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.item, styles.borderTop]}>
                <View style={styles.iconeContainer}>
                    <Image source={icons.endereco} style={styles.icone} />
                </View>
                <View style={styles.textos} >
                    <Text style={styles.titulo}>Morada</Text>
                    <Text style={styles.subtitulo}>Minha localização de entrega</Text>
                </View>

                <View style={styles.iconeContainer}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.iconeContainer}>
                    <Image source={icons.dados} style={styles.icone} />
                </View>
                <View style={styles.textos} >
                    <Text style={styles.titulo}>Meus dados</Text>
                    <Text style={styles.subtitulo}>Informações da minha conta</Text>
                </View>

                <View style={styles.iconeContainer}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.iconeContainer}>
                    <Image source={icons.logout} style={styles.icone} />
                </View>
                <View style={styles.textos} >
                    <Text style={styles.titulo}>Desconectar</Text>
                    <Text style={styles.subtitulo}>Tirar a minha conta deste dipositivo</Text>
                </View>

                <View style={styles.iconeContainer}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>


        </View>
    );
}

export default AbaPerfil;