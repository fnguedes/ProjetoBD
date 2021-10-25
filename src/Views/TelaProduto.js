import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinhaLast, { Colunas, ColunaId, ColunaNome, LinhaTitulo } from '../Components/Linha'
import styles from '../../Style/Style';
import TelaDetalheProduto from './TelaDetalheProduto';

export default function (props) {
    const dados = [{ id: 1, nome: 'Mortadela', categoria: 'Carnes' },
    { id: 2, nome: 'Pão', categoria: 'Massas' },
    { id: 3, nome: 'Manteiga', categoria: 'Laticínios' }]
    let a = dados[0]
    console.warn(Object.keys(a).length)
    return (

        <View style={{ flex: 1, backgroundColor: '#777' }}>
            <View style={styles.containerTela}>

                <Text style={{ color: '#fff' }}>Tabela de Produtos</Text>
                <View style={styles.containerTabela}>
                    
                    <LinhaTitulo tamanho={Object.keys(dados[0]).length} />
                    <View>

                        <Colunas tamanho={Object.keys(dados[0]).length} dados={dados} />
                    </View>

                    {/* <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    </View> */}
                </View>
            </View>

            {/* Linha Abaixo da View Principal */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>

                </View>
                <View>
                    <TouchableOpacity style={styles.localBotao} onPress={() => { props.navigation.navigate("Tela Detalhe Produto", { dados }) }} >
                        <View style={styles.botao}>
                            <Text style={styles.txtBotao}>
                                Detalhes
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

