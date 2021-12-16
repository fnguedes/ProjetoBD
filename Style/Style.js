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
        borderWidth: 1,
        borderRadius: 15


    },
    //Esilos dos Dados das Colunas
    containerColunas: {
        flexDirection: 'row',
        flex: 1,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#ddd'
    },
    boxColuna: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRightWidth:1,

    },
    txtDados: {
        fontSize: 11,
        fontWeight: '600'
    }
    ,
    //Esilos dos Titulos das Tabelas
    LinhaTitulo: {
        backgroundColor: '#00ced1',
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 25
    },
    boxLinhaTi: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRightWidth:1
    },
    txtTitulo: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    },
    //Esilo para as box mais a direita
    ult: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabletri:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Esilos do botão
    botao: {
        width: 75,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#66f',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    localBotao: {
        paddingRight: 15,
        paddingBottom: 20
    },
    txtBotao: {
        fontWeight: '650',
        color: '#fff'
    },
    AlinColu: {
        flexDirection: 'row',
        flex: 1,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#ddd'
    },
    testeAux: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#bbb',
        borderRadius: 5,
        fontSize: 12,
        borderColor: '#000',
        marginRight: 10,
    },
    inputcat: {
        width: '100%',
        backgroundColor: '#bbb',
        borderRadius: 5,
        fontSize: 12,
        borderColor: '#000',
        marginTop: 10,
    },
    containerInput: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    containerCadastraProdutos: {
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cadastroTitulo: {
        fontSize: 13,
        fontWeight: '400',
        width: '100%',
        color: '#000'
    },
    containerTitulos: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    listaCat: {
        marginTop: 10,
        width: '90%',
        height: 40,
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    boxCat: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#006'
    },
    editButton: {
        marginLeft: 10,
        height: 30,
        width: 30,
        backgroundColor: 'green',
        borderRadius: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 30,
        width: 30,
        backgroundColor: '#E11414',
        borderRadius: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        height: 35,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    TelaProduto:{
        flex:1,
        backgroundColor:'#600',
        alignItems:'center',
        
    },
    boxProduto:{
        width:'90%',
        height:'9%',
        flexDirection:'row',
        backgroundColor:'#00b',
        marginTop:10,
        borderRadius:20
    },
    id:{
        borderRightWidth:1,
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    nome:{
        borderBottomWidth:1,
        flex:1
    },
    categoria:{
        flex:1
    },
    editDelet:{
        flexDirection:'row',
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

})
export default styles