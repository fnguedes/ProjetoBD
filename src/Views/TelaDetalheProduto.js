import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../Style/Style';
import {LinhaDetalheLast,LinhaDetalheNormal,LinhaDetalheTitulo} from '../Components/Linha'

export default function (props) {
    console.warn(props.route.params)
    return (
        <View style={{ flex: 1, backgroundColor: '#777' }}> 
        <View style={styles.containerTabela}>
        <Text style={{ color: '#fff' }}>Tabela de detalhes dos produtos</Text>

                <LinhaDetalheTitulo />
                <LinhaDetalheNormal dados={props.route.params.dados[0]}/>
                <LinhaDetalheNormal dados={props.route.params.dados[1]}/>
                <LinhaDetalheLast dados={props.route.params.dados[2]}/>
                
        </View>
        </View>
    )
}