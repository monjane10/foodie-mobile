import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screans/login/login.jsx';
import Registo from './screans/registo/registo.jsx';
import Registo2 from './screans/registo2/registo2.jsx';
import Busca from './screans/busca/busca.jsx';
import Cardapio from './screans/cardapio/cardapio.jsx';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator> 

                 <Stack.Screen name="cardapio" component={Cardapio} options={{  
                    headerShown: false,
                    headerTitleAlign: "center",
                    }} />
                    <Stack.Screen name="busca" component={Busca} options={{  
                    headerShadowVisible: false,
                    title: "Resultados da busca",
                    headerTitleAlign: "center",
                    }} />

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