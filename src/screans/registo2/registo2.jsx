import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registo2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Registo2() {
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [telefone, setTelefone] = useState('');
    return(
        
        <ScrollView>
        <View style ={styles.container}>
        <Header texto="Dados adicionais"/>
        <View style={styles.formgroup}>
        <TextBox texto="Cidade" placeholder="Ex: Maputo"  onChangeText={(texto) => setCidade(texto)}
        value={cidade} />
        <TextBox texto="Bairro" placeholder="Mavalane"  onChangeText={(texto) => setBairro(texto)}
        value={bairro} />
        <TextBox texto="Rua" placeholder="4001"  onChangeText={(texto) => setRua(texto)}
        value={rua}/>
        <TextBox texto="Telefone" placeholder="850741012"  onChangeText={(texto) => setTelefone(texto)}
        value={telefone}/>
        <View style={styles.btn}>
        <Button texto="Criar minha conta" />
        </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Registo2;