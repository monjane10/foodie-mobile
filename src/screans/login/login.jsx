import { View } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";


function Login() {
    return(
        <View style ={styles.container}>
        <Header texto="Entre na tua conta"/>
        <TextBox texto="Email" />
        <TextBox texto="Senha" />
        </View>
    )
}

export default Login;