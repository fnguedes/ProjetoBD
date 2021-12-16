import React, { Component, useState } from 'react'
import { Text, TextInput, View, Picker, StatusBar, TouchableOpacity } from 'react-native';
import styles from '../../Style/Style';
import api from '../../routes/Api';
import { Feather as Icon } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default class TelaCadastroProdutos extends Component {
    state = {
        dados: [],
        categorias: [],
        nome: "",
        categoria1:[] ,
        categoria2:[],
        preco: [],
        quantidade: []
    }

    _goBack = () => this.props.navigation.goBack();
    alterarNome(nom) {
        this.setState({ nome: nom })
    }
    alterarCat1(cat) {
        this.setState({ categoria1: cat })
    }
    alterarCat2(cat) {
        this.setState({ categoria2: cat })
    }
    alterarPreco(preco) {
        this.setState({ preco: preco })
    }
    alterarQuant(qtd) {
        this.setState({ quantidade: qtd })
    }

    postProduto = async () => {
        console.log("entrei no postProduto")

        console.log("este é o console", this.state.nome,this.state.categoria1)
        await api.post('/cadastrar_produto', {
            nome: this.state.nome, categoria1: this.state.categoria1,
            categoria2: this.state.categoria2, preco: this.state.preco, quantidade: this.state.quantidade
        });

       
    }
    async getCategorias() {
        try {
            const response = await api.get('/categorias');
            console.log(response.data.data);
            this.setState({ categorias: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getCategorias();
    };

    render() {
        let valor;
        return (
            <View style={{ flex: 1, backgroundColor: '#777', justifyContent: 'baseline', alignItems: 'center' }}>
                <View style={{ width: "100%" }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Cadastrar Produto" />

                    </Appbar.Header>
                </View>
                <View style={styles.containerCadastraProdutos}>
                    <View style={styles.containerTitulos}>
                        <Text style={styles.cadastroTitulo}>Nome:</Text>
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.input}
                            placeholder="Nome do Produto"
                            clearButtonMode="always"
                            value={this.state.nome}
                            onChangeText={(nom) => this.alterarNome(nom)}
                        />
                    </View>

                    <View style={styles.containerTitulos}>
                        <Text style={styles.cadastroTitulo}>Categoria 1:</Text>
                        <Text style={styles.cadastroTitulo}>Categoria 2:</Text>
                    </View>
                    <View style={styles.containerInput}>

                        <Picker
                            selectedValue={valor}
                            style={{ height: 30, width: '90%' }}
                            onValueChange={(itemValue, itemIndex) => this.alterarCat1(itemValue)}
                        >
                            {this.state.categorias.map((produto) => (
                                <Picker.Item label={produto.categoria} value={produto.id} key={produto.id} />
                            ))}

                        </Picker>
                        <Picker
                            selectedValue={valor}
                            style={{ height: 30, width: '90%' }}
                            onValueChange={(itemValue, itemIndex) => this.alterarCat2(itemValue)}
                        >
                            {this.state.categorias.map((produto) => (
                                <Picker.Item label={produto.categoria} value={produto.id} key={produto.id} />
                            ))}

                        </Picker>
                    </View>

                    <View style={styles.containerTitulos}>
                        <Text style={styles.cadastroTitulo}>Preço:</Text>
                        <Text style={styles.cadastroTitulo}>Quantidade:</Text>
                    </View>
                    <View style={styles.containerInput}>

                        <TextInput style={styles.input}
                            placeholder="R$ 00,00"
                            clearButtonMode="always"
                            value={this.state.preco}
                            onChangeText={(preco) => this.alterarPreco(preco)}
                        />
                        <TextInput style={styles.input}
                            placeholder=" 0"
                            clearButtonMode="always"
                            value={this.state.quantidade}
                            onChangeText={(qtd) => this.alterarQuant(qtd)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.postProduto} >
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={18} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}