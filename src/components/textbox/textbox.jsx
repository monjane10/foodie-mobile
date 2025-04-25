import { TextInput, Text } from "react-native";
import { styles } from "./textbox.style.js";

function TextBox(props) {
    return (
        <>
        <Text style={styles.texto}>{props.texto}</Text>
        <TextInput style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword} />
        </>)
}

export default TextBox;