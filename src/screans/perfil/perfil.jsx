import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons.js";


function Perfil() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.item , styles.borderTop]}>
                <View style={styles.iconeContainer}>
                    <Image source={icons.endereco} style={styles.icone} />
                </View>
            <View style={styles.textos} >
                    <Text style={styles.titulo}>Endereço</Text>
                    <Text style={styles.subtitulo}>Meu endereço de entrega</Text>
                </View>

                <View  style={styles.iconeContainer}>
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

                <View  style={styles.iconeContainer}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.iconeContainer}>
                    <Image source={icons.logout} style={styles.icone} />
                </View>
            <View style={styles.textos} >
                    <Text style={styles.titulo}>Sair</Text>
                    <Text style={styles.subtitulo}>Tirar a tua conta deste dipositivo</Text>
                </View>

                <View  style={styles.iconeContainer}>
                    <Image source={icons.more} style={styles.more} />
                </View>
            </TouchableOpacity>


        </View>
    );
}

export default Perfil;