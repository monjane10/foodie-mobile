
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screans/home/home.jsx';
import Favoritos from './screans/favoritos/favoritos.jsx';
import Pedidos from './screans/pedidos/pedidos.jsx';
import Perfil from './screans/perfil/perfil.jsx';
import { Image } from "react-native";
import icons from "./constants/icons.js";


const Tab = createBottomTabNavigator();
function RoutesAuth() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, }}>

        <Tab.Screen name="home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Image source={icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
          }

        }} />


        <Tab.Screen name="favoritos" component={Favoritos} options={{
          title: "Favoritos",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => {
            return <Image source={icons.abaFavorito} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
          }
        }} />

        <Tab.Screen name="pedidos" component={Pedidos} options={{
          title: "Meus Pedidos",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => {
            return <Image source={icons.abaPedidos} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
          }
        }} />

        <Tab.Screen name="perfil" component={Perfil} options={{
          title: "Meu Perfil",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => {
            return <Image source={icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
          }
        }} />


      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RoutesAuth;



