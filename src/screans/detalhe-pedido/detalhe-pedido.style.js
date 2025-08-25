import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 25,
        padding: 20

    },

    header: {
        width: "100%",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    titulo: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        textAlign: "center",
    },


    backContainer: {
        position: "absolute",
        top: 7,
        left: 0,
    },
    back: {
        height: 30,
        width: 30,
    },



    nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
    },
    descricao: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },

    footer: {
       padding: 10,
       paddingBottom: 80
    },
    valores: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4,
        marginBottom: 4
    }
    ,

      valor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginBottom: 2,
        marginTop: 15,
    },

    

}