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

export function LinhaDetalheTitulo() {
    
    return (
        <View style={styles.containerLinhaTiDet}>
            <View style={styles.linhaTiDet}>
                <Text style={styles.txtTituloDet}>Id</Text>
            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtTituloDet}>Nome</Text>
            </View>
            <View style={styles.linhaTiDet}>
                <Text style={styles.txtTituloDet}>Categoria</Text>
            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtTituloDet}>Quant. Itens</Text>
            </View>
            <View style={styles.linhaTiDet}>
                <Text style={styles.txtTituloDet}>Valor Médio</Text>
            </View>
        </View>


    )
}

export function LinhaDetalheNormal(props) {
    
    return (
        <View style={styles.containerLinhaDet}>
            <View style={styles.linhaNorDet}>
                <Text style={styles.txtDados}>{props.dados.id}</Text>
            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtDados}>{props.dados.nome}</Text>

            </View>
            <View style={styles.linhaNorDet}>
                <Text style={styles.txtDados}>{props.dados.categoria}</Text>

            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtDados}>{props.dados.Quantidade}</Text>

            </View>
            <View style={styles.linhaNorDet}>
                <Text style={styles.txtDados}>{props.dados.VendaM}</Text>

            </View>
        </View>

    )
}

export function LinhaDetalheLast(props) {
    return (
        <View style={styles.containerLinhaLastDet}>
            <View style={styles.linhaLastDet}>
                <Text style={styles.txtDados}>{props.dados.id}</Text>
            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtDados}>{props.dados.nome}</Text>
            </View>
            <View style={styles.linhaNorDet}>
                <Text style={styles.txtDados}>{props.dados.categoria}</Text>
            </View>
            <View style={styles.linhaCentDet}>
                <Text style={styles.txtDados}>{props.dados.Quantidade}</Text>
            </View>
            <View style={styles.linhaLastDet}>
                <Text style={styles.txtDados}>{props.dados.VendaM}</Text>
            </View>
        </View>
        )
}