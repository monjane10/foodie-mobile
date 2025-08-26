import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Login(props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function fazerLogin() {
        Alert.alert("jobou");
    }

    return(
        <View style ={styles.container}>
        <Header texto="Bem - Vindo ao Foodie"/>
        <View style={styles.formgroup}>
        <TextBox texto="Email" placeholder="exemplo@gmail.com" onChangeText={(texto) => setEmail(texto)}
        value={email} />
        <TextBox texto="Senha" isPassword={true} onChangeText={(texto) => setSenha(texto)}
        value={senha} />
        <View style={styles.btn}>
        <Button texto="Entrar" onPress={fazerLogin} />
        </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("registo")} >
            <Text style={styles.footertext}>Criar uma Conta</Text>
            </TouchableOpacity>
           
        </View>
        </View>
    )
}

export default Login;