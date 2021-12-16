import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../Style/Style'

export function Colunas(props) {
    let produtos = props.dados
    console.log(props.dados)
    //console.warn(produtos)
    console.log(props.tamanho)
    return (
        <View style={styles.containerColunas}>
            {props.tamanho>=1?
            <View style={styles.boxColuna} >
            {props.tamanho >= 1 ?
                produtos.map((produto) => (
                    <View key={produto.id_prod_cat+10} >
                        <Text style={styles.txtDados}>{produto.id}</Text>
                    </View>
                ))
                : false}
                </View>:false}
           
            {props.tamanho>=2?
            <View style={styles.boxColuna} >
            {props.tamanho >= 2 ?
                produtos.map((produto) => (
                    <View key={produto.id_prod_cat+20} >
                        <Text style={styles.txtDados}>{produto.nome}</Text>
                    </View>
                ))
                : false}
                </View>:false}

            {props.tamanho>=3?
            <View style={props.tamanho==3?styles.ult:styles.boxColuna} >
            {props.tamanho >= 3 ?
                produtos.map((produto) => (
                    <View key={produto.id_prod_cat+30} >
                        <Text style={styles.txtDados}>{produto.categoria}</Text>
                    </View>
                ))
                : false}
                </View>:false}
            {props.tamanho>=4?
            <View style={styles.boxColuna} >
            {props.tamanho >= 4 ?
                produtos.map((produto) => (
                    <View key={produto.id_prod_cat+40} >
                        <Text style={styles.txtDados}>{produto.quantidade}</Text>
                    </View>
                ))
                : false}
                </View>:false}

            {props.tamanho>=5?
            <View style={styles.ult} >
            {props.tamanho >= 5 ?
                produtos.map((produto) => (
                    <View key={produto.id_prod_cat+50} >
                        <Text style={styles.txtDados}>{produto.preco}</Text>
                    </View>
                ))
                : false}
                </View>:false}
            
        </View>

    )
}

export function LinhaTitulo(props) {
    //console.warn(props.tamanho)
    return (
        <View style={styles.LinhaTitulo}>
            {props.tamanho >= 1 ?
                <View style={props.tamanho==3?styles.tabletri:styles.boxLinhaTi}>
                    <Text style={styles.txtTitulo}>Id</Text>
                </View> : false
            }
            {props.tamanho >= 2 ?
                <View style={props.tamanho==3?styles.tabletri:styles.boxLinhaTi}>
                    <Text style={styles.txtTitulo}>Nome</Text>
                </View> : false
            }
            {props.tamanho >= 3 ?
                <View style={props.tamanho==3?styles.tabletri:styles.boxLinhaTi}>
                    <Text style={styles.txtTitulo}>Categoria</Text>
                </View> : false
            }
            {props.tamanho >= 4 ?
                <View style={styles.boxLinhaTi}>
                    <Text style={styles.txtTitulo}>Quant.</Text>
                </View> : false
            }
            {props.tamanho >= 5 ?
                <View style={styles.ult}>
                    <Text style={styles.txtTitulo}>Valor M.</Text>
                </View> : false
            }
        </View>


    )
}
