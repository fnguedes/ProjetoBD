import React, { useState, Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View ,StatusBar} from 'react-native';
import styles from '../../Style/Style';
import api from '../../routes/Api';
import Produto from '../Components/BoxProduto'
import { Appbar } from 'react-native-paper';
export default class TelaProduto extends Component {

    state = {
        dados: [],
    }
    async getProdutos() {
        try {
            const response = await api.get('/detalhes_produtos');
            console.log(response.data.data)
            this.setState({ dados: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getProdutos();
    };
    //const produtos= getProdutos();
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#777' }}>
                <StatusBar barStyle="dark-content" />
                <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                    <Appbar.Content title="Produtos" />
                    <Appbar.Action icon="refresh" onPress={() => this.getProdutos()} 
                    />
                </Appbar.Header>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    {this.state.dados.map((produto) => (
                        <Produto key={produto.id_prod_cat} id={produto.id} nome={produto.nome} categoria={produto.categoria}
                            preco={produto.preco} quantidade={produto.quantidade} id_prod_cat={produto.id_prod_cat}navigation={this.props.navigation} />
                    ))}

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View >
                        <TouchableOpacity style={styles.localBotao} onPress={() => { this.props.navigation.navigate("Tela Categoria") }} >
                            <View style={styles.botao}>
                                <Text style={styles.txtBotao}>
                                    Categoria
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.localBotao} onPress={() => { this.props.navigation.navigate("Tela Cadastrar Produto") }} >
                            <View style={styles.botao}>
                                <Text style={styles.txtBotao}>
                                    Cadastrar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.localBotao} onPress={() => { this.props.navigation.navigate("Tela Detalhe Produto") }} >
                            <View style={styles.botao}>
                                <Text style={styles.txtBotao}>
                                    Detalhes
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View >

        )

    }


}

