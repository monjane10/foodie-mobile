import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screans/login/login.jsx';
import Registo from './screans/registo/registo.jsx';
import Registo2 from './screans/registo2/registo2.jsx';
import Home from './screans/home/home.jsx';
import Favoritos from './screans/favoritos/favoritos.jsx';
import Pedidos from './screans/pedidos/pedidos.jsx';
import Perfil from './screans/perfil/perfil.jsx';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                   <Stack.Screen name="pedidos" component={Pedidos} options={{title: "Meus Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }} />  
                  <Stack.Screen name="perfil" component={Perfil} options={{title: "Meu Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }} />   
                  <Stack.Screen name="favoritos" component={Favoritos} options={{title: "Favoritos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }} />  
                 <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
                 <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
           
                
                
               
                <Stack.Screen name="registo" component={Registo} options={{
                    //headerShown: false 
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar" }} />
                <Stack.Screen name="registo2" component={Registo2} options={{ //headerShown: false 
                    headerShadowVisible: false,
                    title: "",
                    headerBackTitle: "Voltar"}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;