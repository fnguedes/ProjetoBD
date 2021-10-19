import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaProduto from '../src/Views/TelaProduto'
import TelaDetalheProduto from '../src/Views/TelaDetalheProduto'

const Stack= createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="Tela Produto">
        <Stack.Screen name="Tela Produto" component={TelaProduto} options={{title:'Produtos'}} />
        <Stack.Screen name="Tela Detalhe Produto" component={TelaDetalheProduto} options={{title:'Detalhes'}} />
    </Stack.Navigator>
)

