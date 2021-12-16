import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text,StatusBar } from 'react-native'
import styles from '../../Style/Style'
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../routes/Api'
import { Appbar } from 'react-native-paper';

export default class CadastroCategoria extends Component {
    state = {
        categoria: []
    }

    _goBack = () => this.props.navigation.goBack();
    alterarCat(cat) {
        this.setState({ categoria: cat })
        console.log(this.state.categoria)
    }
    postCategoria = async () => {
        console.log(this.state.categoria)
        await api.post('/cadastrar_categoria', { categoria: this.state.categoria });

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#777' }}>
                <View style={{ width: "100%" }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Cadastrar Categoria" />

                    </Appbar.Header>
                </View>
                <View>
                    <Text style={{ fontSize: 12 }}>Nova Categoria:</Text>
                    <TextInput style={styles.inputcat}
                        placeholder="Nome da Categoria"
                        clearButtonMode="always"
                        value={this.state.categoria}
                        onChangeText={(cat) => this.alterarCat(cat)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.postCategoria} >
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={18} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

