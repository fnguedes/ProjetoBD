import React,{useState} from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinhaLast, { LinhaNor, LinhaTitulo } from '../Components/Linha'
import styles from '../../Style/Style';
import TelaDetalheProduto from './TelaDetalheProduto';

export default function (props) {
    const dados = [{ id: 1, nome: 'Mortadela', categoria: 'Carnes', Quantidade:5,VendaM:10 },
    { id: 2, nome: 'Pão', categoria: 'Massas' ,Quantidade:14,VendaM:3},
    { id: 3, nome: 'Manteiga', categoria: 'Laticionios' ,Quantidade:3,VendaM:15}]

    // const [dados,setDados] = useState([{ id: 1, nome: 'Mortadela', categoria: 'Carnes geladas' },
    // { id: 2, nome: 'Pão', categoria: 'Massas' },
    // { id: 3, nome: 'Manteiga', categoria: 'Laticionios' }])
    // console.warn(dados.length)
    // let contador=0;

    return (

        <View style={{ flex: 1, backgroundColor: '#777' }}>
            <View style={styles.containerTabela}>
                <Text style={{ color: '#fff' }}>Tabela de Produtos</Text>
                <LinhaTitulo />
                <LinhaNor dados={dados[0]} />
                <LinhaNor dados={dados[1]} />
                <LinhaLast dados={dados[2]}/>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text>
                        Texto pra dizer que eu que fiz hehe
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.localBotao} onPress={() => { props.navigation.navigate("Tela Detalhe Produto",{dados}) }} >
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

