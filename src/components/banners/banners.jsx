import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./banners.style.js";

function Banners(props){
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            props.dados.map((banner, index) => {
                return <View key={index} style={styles.banner}>
                    <TouchableOpacity>
                    <Image source={banner.icone} style={styles.icone} />
                    </TouchableOpacity>
                </View> 
            })
        }
            </ScrollView>
        </View>
    )
}

export default Banners;