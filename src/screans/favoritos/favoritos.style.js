import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flex: 1,
       padding: 15,
       backgroundColor: COLORS.white,
        
    },

    containerList: {
        flexGrow: 1,
    },

    vazio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60,
    },

    empty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray
    },

    logotipo: {
        width: 80,
        height: 80,
        borderRadius: 6
    }

   
}