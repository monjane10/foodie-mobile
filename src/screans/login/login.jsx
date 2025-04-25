import { View } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";


function Login() {
    return(
        <View style ={styles.container}>
        <Header texto="Entre na tua conta"/>
        </View>
    )
}

export default Login;