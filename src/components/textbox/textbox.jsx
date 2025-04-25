import { TextInput, Text } from "react-native";
import { styles } from "./textbox.style.js";

function TextBox(props) {
    return (
        <>
        {
           props.texto &&  <Text style={styles.texto}>{props.texto}</Text>
        }
       
        <TextInput style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(texto) => props.onChangeText(texto)} 
        value={props.value}/>
        </>)
}

export default TextBox;