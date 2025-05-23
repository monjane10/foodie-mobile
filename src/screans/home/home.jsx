import {styles} from './home.style.js';
import { View, Text, Image, ScrollView } from 'react-native'
import icons from '../../constants/icons.js'
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../../components/textbox/textbox.jsx';
import Categorias from '../../components/categorias/categorias.jsx';
import {categorias, banners, restaurantes} from '../../constants/dados.js';
import { useState } from 'react';
import Banners from '../../components/banners/banners.jsx';
import Restaurante from '../../components/restaurante/restaurante.jsx';

function Home() {
    const [busca, setBusca] = useState('');

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
            <Image source={icons.cart} style={styles.cart} />
        </View>
        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?"  onChangeText ={(texto) => setBusca(texto) }
            value={busca} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados ={categorias} />
        <Banners dados = {banners} />

        <Text style={styles.titulo}>Restaurantes</Text>

        {
            restaurantes.map((restaurante, index) => {
                return <View key={index}>
                    <Restaurante logotipo={restaurante.logotipo}
                    nome={restaurante.nome}
                    endereco={restaurante.endereco}
                    icone={icons.favoritoFull} />
                </View>
            })
        }
        </ScrollView>
        </SafeAreaView>
    )
}

export default Home;