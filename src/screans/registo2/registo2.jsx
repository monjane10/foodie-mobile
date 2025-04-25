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
        <TextBox texto="Casa"/>
        <TextBox texto="Número de BI"/>
        <View style={styles.btn}>
        <Button texto="Registar" />
        </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
            <Text style={styles.footertext}>Entrar na minha conta</Text>
            </TouchableOpacity>
           
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo2;