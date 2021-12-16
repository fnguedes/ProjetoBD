import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native';
import styles from '../../Style/Style';
import { LinhaTitulo, Colunas } from '../Components/Linha'
import api from '../../routes/Api';
import { Appbar } from 'react-native-paper';

export default class TelaDetalheProduto extends Component {
    state = { dados: [{ id: -1, nome: '', categoria: '', Quantidade: -1, VendaM: -1 }] }

    _goBack = () => this.props.navigation.goBack();

    async getProdutos() {
        try {
            const response = await api.get('/detalhes_produtos');
            console.log(response.data.data);
            this.setState({ dados: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getProdutos();
    };

    render() {
        return (
            <View style={{flex:1}}> 

                <View style={{ width: "100%", justifyContent: 'flex-start' }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Detalhes dos Produtos" />
                        {/* <Appbar.Action icon="refresh" //onPress={() => Atualizar()} 
                        /> */}
                    </Appbar.Header>
                </View>
                <View style={{ flex: 1, backgroundColor: '#777', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>Tabela de detalhes dos produtos</Text>
                    <View style={styles.containerTabela}>
                        <LinhaTitulo tamanho={Object.keys(this.state.dados[0]).length} />
                        <View>
                            <Colunas tamanho={Object.keys(this.state.dados[0]).length} dados={this.state.dados} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}