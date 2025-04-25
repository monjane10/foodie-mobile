import { Text } from 'react-native';
import { styles } from "./style.js";
import Button from "./src/components/button.jsx";

export default function App() {

  return (<>
    <Text style={styles.textos}>Hello World</Text>

    <Button texto="Acessar" />
  </>
  );
}
