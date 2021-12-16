import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import styles from '../../Style/Style';
import api from '../../routes/Api';
import Categoria from '../Components/BoxCategoria'
import { Appbar } from 'react-native-paper';

export default class TelaCategoria extends Component {
    state = {
        dados: [],

    }
    _goBack = () => this.props.navigation.goBack();

    async getCategorias() {
        try {
            const response = await api.get('/categorias');
            console.log(response.data.data);
            this.setState({ dados: response.data.data });
        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getCategorias();
    };



    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#777', justifyContent: 'baseline', alignItems: 'center' }}>
                <View style={{ width: "100%" }}>

                    <StatusBar barStyle="dark-content" />
                    <Appbar.Header style={{ backgroundColor: '#0D31FF' }}>
                        <Appbar.BackAction onPress={this._goBack} />
                        <Appbar.Content title="Categorias" />
                        <Appbar.Action icon="refresh" onPress={() => this.getCategorias()} />
                    </Appbar.Header>
                </View>
                <View style={{ width: '100%', marginLeft: 10 }}>


                    <FlatList
                        marginHorizontal={10}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.dados}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <Categoria data={item} navigation={this.props.navigation} />}
                    />
                    {/* <Categoria data={this.state.dados}/> */}

                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                    <TouchableOpacity style={styles.localBotao} onPress={() => { this.props.navigation.navigate("Tela Cadastrar Categoria") }} >
                        <View style={styles.botao}>
                            <Text style={styles.txtBotao}>
                                Inserir
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}