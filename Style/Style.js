import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#66f"
    },
    containerTela: {
        flex: 1,
        backgroundColor: '#777',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTabela: {
        width: "85%",
        borderWidth:1,
        borderRadius:15


    },
    //Esilos dos Dados das Colunas
    containerColunas: {
        flexDirection:'row',
        flex:1,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:'#ddd'
    },
    boxColuna: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // borderRightWidth:1,
        
    },
    txtDados: {
        fontSize:11,
        fontWeight:'600'
    }
    ,
    //Esilos dos Titulos das Tabelas
    LinhaTitulo: {
        backgroundColor:'#00ced1',
        flexDirection:'row',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:25
    },
    boxLinhaTi: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // borderRightWidth:1
    },
    txtTitulo: {
        color:'#fff',
        fontSize:13,
        fontWeight:'bold'
    },
    //Esilo para as box mais a direita
    ult:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    //Esilos do botão
    botao:{
        width:75,
        height:30,
        borderRadius:30,
        backgroundColor:'#66f',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end'
    },
    localBotao:{
        paddingRight:15,
        paddingBottom:20
    },
    txtBotao:{
        fontWeight:'650',
        color:'#fff'
    },
    AlinColu:{
        flexDirection:'row',
        flex:1,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:'#ddd'
    },
    testeAux:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})
export default styles