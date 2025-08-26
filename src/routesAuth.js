
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screans/principal/principal.jsx";
import Cardapio from './screans/cardapio/cardapio.jsx';
import Busca from "./screans/busca/busca.jsx";
import DetalheProducto from "./screans/detalhe-producto/detalhe-producto.jsx";
import DetalhePedido from "./screans/detalhe-pedido/detalhe-pedido.jsx";
import Checkout from "./screans/checkout/checkout.jsx";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONT_SIZE } from "./constants/theme.js";


const Stack = createNativeStackNavigator();

function RoutesAuth() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="principal" component={Principal} options={{ headerShown: false }} />
        <Stack.Screen name="detalhe-pedido" component={DetalhePedido} options={{
          headerShadowVisible: false,
          title: "Datalhe do Pedido",
          headerTitleAlign: "center",
          animation: "slide_from_bottom"
        }} />

          <Stack.Screen name="checkout" component={Checkout} options={{
          headerShadowVisible: false,
          title: "Meu Pedido",
          headerTitleAlign: "center",
          animation: "slide_from_bottom",
          headerRight: () => {
           return <TouchableOpacity onPress={() => alert("OK")}>
              <Text style={{color:COLORS.red, fontSize:FONT_SIZE.md}}>Limpar</Text>
            </TouchableOpacity>
          }
        }} />
        <Stack.Screen name="detalhe-producto" component={DetalheProducto} options={{ headerShown: false }} />

        <Stack.Screen name="cardapio" component={Cardapio} options={{
          headerShown: false
        }} />

        <Stack.Screen name="busca" component={Busca} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesAuth;



