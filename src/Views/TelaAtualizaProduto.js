import React, { Component, useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Picker,StatusBar } from 'react-native';
import styles from '../../Style/Style';
import api from '../../routes/Api';
import { Feather as Icon } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default class TelaAtualizarProdutos extends Component {
    state = {
        id: this.props.route.params[0].id,
        nome: this.props.route.params[0].nome,
        categoria: this.props.route.params[0].id_prod_cat,
        preco: this.props.route.params[0].preco,
        quantidade: this.props.route.params[0].quantidade,
        categorias: []
    }

    alterarProduto=async()=>{
        console.log(this.props.route.params[0].categoria)
        await api.post('/alterar_produto',{id:this.state.id,nome:this.state.nome
                                    ,categoria:this.state.categoria,categoriaAnt:this.props.route.params[0].id_prod_cat,
                                    preco:this.state.preco,quantidade:this.state.quantidade})
    }

    _goBack = () => this.props.navigation.goBack();
    alterarNome(nom) {
        this.setState({ nome: nom })
    }
    alterarCat(cat) {
        this.setState({ categoria: cat })
        console.log(this.state.categoria)
    }
    alterarPreco(preco) {
        this.setState({ preco: preco })
    }
    alterarQuant(qtd) {
        this.setState({ quantidade: qtd })
    }
    async getCategorias() {
        try {
            const response = await api.get('/categorias');
            console.log(response.data.data);
            this.setState({ categorias: response.data.data });
            console.log(this.state.categorias)
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getCategorias();
    };

    // async CategoriaAtual(catA,categorias){
    //     let cont=0;
    //     while(catA!=categorias[cont].categoria && cont<categorias.length){

    //         cont++;
    //     }
    //     this.state.idcategoria=cont;
    // }

    render() {
        console.log(this.props.route.params[0])
        console.log(this.state.categorias)
        return (
            <View style={{ flex: 1, backgroundColor: '#777', justifyContent: 'baseline', alignItems: 'center' }}>
                <View style={{ width: "100%" }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Atualizar Produto" />
                        
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
                            onChangeText={nome => this.alterarNome(nome)}
                        />
                    </View>

                    <View style={styles.containerTitulos}>
                        <Text style={styles.cadastroTitulo}>Categoria:</Text>

                    </View>
                    <View style={styles.containerInput}>

                        <Picker

                            style={{ height: 25, width: '90%' }}
                            onValueChange={(itemValue, itemIndex) => this.alterarCat(itemValue)}
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
                            keyboardType='numeric'
                            placeholder="R$ 00,00"
                            clearButtonMode="always"
                            value={this.state.preco}
                            onChangeText={(preco) => this.alterarPreco(preco)}
                        />
                        <TextInput style={styles.input}
                            keyboardType='numeric'
                            placeholder=" 0"
                            clearButtonMode="always"
                            value={this.state.quantidade}
                            onChangeText={(qtd) => this.alterarQuant(qtd)}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button}  onPress={this.alterarProduto}>
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={18} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}