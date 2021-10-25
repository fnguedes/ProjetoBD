import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../Style/Style';
import { LinhaTitulo, Colunas } from '../Components/Linha'

export default function (props) {
    const dados = [{ id: 1, nome: 'Mortadela', categoria: 'Carnes', Quantidade: 5, VendaM: 10 },
    { id: 2, nome: 'Pão', categoria: 'Massas', Quantidade: 14, VendaM: 3 },
    { id: 3, nome: 'Manteiga', categoria: 'Laticionios', Quantidade: 3, VendaM: 15 }]
    console.warn(props.route.params)

    return (
        <View style={{ flex: 1, backgroundColor: '#777',justifyContent:'center',alignItems:'center' }}>
                <Text style={{ color: '#fff' }}>Tabela de detalhes dos produtos</Text>
            <View style={styles.containerTabela}>
                <LinhaTitulo tamanho={Object.keys(dados[0]).length} />
                <View>
                    <Colunas tamanho={Object.keys(dados[0]).length} dados={dados} />
                </View>
            </View>
        </View>
    )
}