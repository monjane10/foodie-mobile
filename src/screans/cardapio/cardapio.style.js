import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },

    fotoContainer: {
        alignItems: "center",
    },
    foto: {
        height: 150,
    },
    backContainer: {
        position: "absolute",
        top: 20,
        left: 15,

    },

    back: {
        width: 40,
        height: 40,
    },

    header:{
        width: "100%",
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },

    favorito:{
        width: 30,
        height: 30,
    },

    headerText:{
        flex: 1,
        flexDirection: "column",
        gap: 5,
    },

    nome:{
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
    },
    taxa:{
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },

    location:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        
    },

    locationImg:{
        width: 30,
        height: 30,
        margin: 10,
    },

    endereco:{
       flex: 1,
       fontSize: FONT_SIZE.md,
         color: COLORS.dark_gray,
    },

    categoriaContainer:{
        padding: 15,
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,

    },

    categoriaContainer:{
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        padding: 5,
    },



}