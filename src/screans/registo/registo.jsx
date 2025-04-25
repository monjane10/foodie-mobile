import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registo.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Registo(props) {
    return(
        
        <ScrollView>
        <View style ={styles.container}>
        <Header texto="Criar uma conta"/>
        <View style={styles.formgroup}>
        <TextBox texto="Nome Completo" />
        <TextBox texto="Email" />
        <TextBox texto="Senha" isPassword={true} />
        <TextBox texto="Confirmar Senha" isPassword={true} />
        <View style={styles.btn}>
        <Button texto="Proximo Passo" onPress={() => props.navigation.navigate("registo2")} />
        </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo;