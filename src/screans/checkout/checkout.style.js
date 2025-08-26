import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20

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

total: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    fontWeight:"bold"
},

containerBtn: {
    marginTop: 10,
    
}

    

}