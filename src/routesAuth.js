
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screans/principal/principal.jsx";
import Cardapio from './screans/cardapio/cardapio.jsx';
import Busca from "./screans/busca/busca.jsx";
import DetalheProducto from "./screans/detalhe-producto/detalhe-producto.jsx";
import DetalhePedido from "./screans/detalhe-pedido/detalhe-pedido.jsx";


const Stack = createNativeStackNavigator();

function RoutesAuth() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
             <Stack.Screen name="detalhe-pedido" component={DetalhePedido} options={{ headerShown: false }} />
          <Stack.Screen name="detalhe-producto" component={DetalheProducto} options={{ headerShown: false }} />
        <Stack.Screen name="principal" component={Principal} options={{ headerShown: false }} />
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



