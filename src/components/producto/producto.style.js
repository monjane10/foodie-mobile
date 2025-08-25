import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 10,
        marginBottom: 10,
        

    },

    foto:{
        width: 80,
        height: 80,
        borderRedius: 12,
    },

    textos:{
        flex: 1,
        padding: 8,
    },

    nome:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,

    },

    descricao:{
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,
        
    },

    valor:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
        padding: 8,
    },

}