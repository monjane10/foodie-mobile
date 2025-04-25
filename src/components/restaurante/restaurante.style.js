import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flexDirection: 'row',
       marginBottom: 10,
       marginTop: 10,

        
    },

    logo: {
        width: 80,
        height: 80,
    },

    textos: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },

    nome: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginBottom: 5,
    },

    endereco: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_gray,
    },

    favorito: {
        width: 30,
        height: 30,
    },

  
   
}