import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native'
import styles from '../../Style/Style'
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../routes/Api';
import { Appbar } from 'react-native-paper';

export default class CadastroCategoria extends Component {

    state = {
        categoria: [this.props.route.params.data.categoria],
        categorias: [],
        id: [this.props.route.params.data.id]
    }
    alterarCat(cat) {
        this.setState({ categoria: cat })
        console.log(this.state.categoria)
    }
    _goBack = () => this.props.navigation.goBack();
    atualizarCategoria=async()=> {
        try {
            const response = await api.post('/alterar_categoria', { id: this.state.id[0], categoria: this.state.categoria })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        console.log(this.state.id[0])
        return (
            <View style={{ flex: 1, backgroundColor: '#888', alignItems: 'center' }}>
                <View style={{ width: "100%" }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Atualizar Categoria" />

                    </Appbar.Header>
                </View>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontSize: 12 }}>Nova Categoria:</Text>
                    <TextInput style={styles.inputcat}
                        placeholder="Nome do Produto"
                        clearButtonMode="always"
                        value={this.state.categoria}
                        onChangeText={(cat) => this.alterarCat(cat)}
                    />

                </View>
                <TouchableOpacity style={styles.button} onPress={this.atualizarCategoria} >
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={18} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

