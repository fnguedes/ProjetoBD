import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaProduto from '../src/Views/TelaProduto'
import TelaDetalheProduto from '../src/Views/TelaDetalheProduto'
import styles from '../Style/Style'

const Stack= createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Tela Produto">
        <Stack.Screen name="Tela Produto" component={TelaProduto} options={{title:'Produtos',headerStyle:styles.tabBar}} />


        <Stack.Screen name="Tela Detalhe Produto" component={TelaDetalheProduto} options={{title:'Detalhes'
            ,headerStyle:styles.tabBar }}/>


    </Stack.Navigator>
)

