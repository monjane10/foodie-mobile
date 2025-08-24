import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    pedido: {
       flexDirection: 'row',
       marginBottom: 10,
       marginTop: 10,

        
    },

    logotipo: {
        width: 90,
        height: 90,
    },

    textos: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
    },

    valores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2,
    },

    valor: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,
    },

     data: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,
    },

      status: {
        color: COLORS.green,
    },



    


  
   
}