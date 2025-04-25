import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Login() {
    return(
        <View style ={styles.container}>
        <Header texto="Entre na tua conta"/>
        <View style={styles.formgroup}>
        <TextBox texto="Email" />
        <TextBox texto="Senha" isPassword={true} />
        <View style={styles.btn}>
        <Button texto="Entrar" />
        </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
            <Text style={styles.footertext}>Criar uma Conta</Text>
            </TouchableOpacity>
           
        </View>
        </View>
    )
}

export default Login;