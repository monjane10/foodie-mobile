import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registo2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Registo2() {
    return(
        
        <ScrollView>
        <View style ={styles.container}>
        <Header texto="Dados adicionais"/>
        <View style={styles.formgroup}>
        <TextBox texto="Cidade" placeholder="Ex: Maputo" />
        <TextBox texto="Bairro" placeholder="Mavalane" />
        <TextBox texto="Rua" placeholder="4001"/>
        <TextBox texto="Telefone" placeholder="850741012"/>
        <View style={styles.btn}>
        <Button texto="Criar minha conta" />
        </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo2;