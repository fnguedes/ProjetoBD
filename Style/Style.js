import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    tabela: {
     
    },
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
    tabBar:{
        backgroundColor:'#66f'
    },
    linhaLast :{
        width:'33%',
        height:20,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    linhaCent:{
        borderRightWidth:1,
        borderLeftWidth:1,
        width:'33%',
        height:20,
        alignItems:'center',
        justifyContent:'center'
    },
    linhaNor:{
        width:'33%',
        height:20,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    linhaTi:{
        width:'33%',
        height:20,
        alignItems:'center',
        justifyContent:'center'
    },
    containerLinha:{
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        width:'76%',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',   
        backgroundColor:'#fff'
    
    },
    containerLinhaTi:{
        borderWidth:1,
        width:'76%',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        backgroundColor:'#bbf3f9',
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },
    containerLinhaLast:{
        width:'76%',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    containerTabela:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txtTitulo:{
        color:"#444",
        fontWeight:'700'
    },
    txtDados:{
        fontSize:12,

    }

  })
  export default styles