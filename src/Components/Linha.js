import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../Style/Style'

export default props => (
    <View style={styles.containerLinhaLast}>
        <View style={styles.linhaLast}>
            <Text style={styles.txtDados}>{props.dados.id}</Text>
        </View>
        <View style={styles.linhaCent}>
            <Text style={styles.txtDados}>{props.dados.nome}</Text>
        </View>
        <View style={styles.linhaLast}>
            <Text style={styles.txtDados}>{props.dados.categoria}</Text>
        </View>
    </View>

)

export function LinhaNor(props) {

    console.warn(props.dados)

    return (
        <View style={styles.containerLinha}>
            <View style={styles.linhaNor}>
                <Text style={styles.txtDados}>{props.dados.id}</Text>
            </View>
            <View style={styles.linhaCent}>
                <Text style={styles.txtDados}>{props.dados.nome}</Text>

            </View>
            <View style={styles.linhaNor}>
                <Text style={styles.txtDados}>{props.dados.categoria}</Text>

            </View>
        </View>

    )
}

export function LinhaTitulo() {

    return (
        <View style={styles.containerLinhaTi}>
            <View style={styles.linhaTi}>
                <Text style={styles.txtTitulo}>Id</Text>
            </View>
            <View style={styles.linhaCent}>
                <Text style={styles.txtTitulo}>Nome</Text>
            </View>
            <View style={styles.linhaTi}>
                <Text style={styles.txtTitulo}>Categoria</Text>
            </View>
        </View>


    )
}