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
        <TextBox texto="Cidade" />
        <TextBox texto="Bairro" />
        <TextBox texto="Rua"/>
        <TextBox texto="Telefone"/>
        <View style={styles.btn}>
        <Button texto="Criar Conta" />
        </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo2;