import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flex: 1,
       paddingTop: 12,
       backgroundColor: COLORS.white,
        
    },
    item: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        
    },
    iconeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    icone: {
        width: 30,
        height: 30,
    },

    textos: {
        flex: 1,
        marginLeft: 10,
    },
    titulo: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },

     subtitulo: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_gray,
    },

    more: {
        width: 20,
        height: 20,
    },

    borderTop: {
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,
    }

}