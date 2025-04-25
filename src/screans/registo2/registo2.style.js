import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flex: 1,
       padding: 40,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: COLORS.white,
        
    },


    texto: {
        fontSize: FONT_SIZE.md,
        color: "white",
        padding: 14,
        textAlign: "center"
    },
    formgroup: {
        width: "100%",
        marginTop: 50,
        marginBottom: 40,
    },
    btn: {
        marginTop: 20,
        width: "100%",
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 10,

    },

    footertext: {
        textAlign: "center",
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        padding: 14,
    }
}