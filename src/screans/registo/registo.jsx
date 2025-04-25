import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registo.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Registo(props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    return(
        
        <ScrollView>
        <View style ={styles.container}>
        <Header texto="Criar uma conta"/>
        <View style={styles.formgroup}>
        <TextBox texto="Nome Completo" placeholder="Hayati Monjane"  onChangeText={(texto) => setNome(texto)}
        value={nome} />
        <TextBox texto="Email" placeholder="exemplo@gmail.com"  onChangeText={(texto) => setEmail(texto)}
        value={email} />
        <TextBox texto="Senha" isPassword={true}  onChangeText={(texto) => setSenha(texto)}
        value={senha}/>
        <TextBox texto="Confirmar Senha" isPassword={true}  onChangeText={(texto) => setSenha2(texto)}
        value={senha2}/>
        <View style={styles.btn}>
        <Button texto="Proximo Passo" onPress={() => props.navigation.navigate("registo2")} />
        </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo;