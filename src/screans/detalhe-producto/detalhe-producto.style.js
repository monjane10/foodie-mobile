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
    descricao:{
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },

     valor:{
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
        marginTop: 15,
    },

    headerObs: {
        width: "100%",
        padding: 10,
    },
    multiline: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        padding: 10,
        color: COLORS.dark_gray,
        borderRedius: 4,
        borderWidth: 1,
        borderColor: COLORS.gray,
        minHeight: 160,
        textAlignVertical: 'top',
    },

    footer:{
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        paddingBottom:100,
        margin: 5,
        justifyContent: "center",
    },

    imgQtd:{
        width: 40,
        height: 40,
    },
        qtd: {
            fontSize: FONT_SIZE.lg,
            fontWeight: "bold",
            color: COLORS.dark_gray,
            width: 40,
            textAlign: "center",
        },
    footerBtn: {
        flex: 1,
        marginRight: 5,
        marginLeft: 20,
    }



}