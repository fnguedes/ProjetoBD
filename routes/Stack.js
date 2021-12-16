import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaProduto from '../src/Views/TelaProduto'
import TelaDetalheProduto from '../src/Views/TelaDetalheProduto'
import styles from '../Style/Style'
import TelaCadastro from '../src/Views/TelaCadastroProduto'
import TelaAtualizar from '../src/Views/TelaAtualizaProduto'
import TelaCategoria from '../src/Views/TelaCategoria'
import TelaCadastroCat from '../src/Views/TelaCadastroCategoria'
import TelaAtualizarCat from '../src/Views/TelaAtualizarCategoria'
const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Tela Produto">
        
        <Stack.Screen name="Tela Produto" component={TelaProduto} options={{ title: 'Produtos', headerStyle: styles.tabBar ,headerShown: false}} />

        <Stack.Screen name="Tela Detalhe Produto" component={TelaDetalheProduto} options={{title: 'Detalhes', headerStyle: styles.tabBar,headerShown: false}} />

        <Stack.Screen name="Tela Cadastrar Produto" component={TelaCadastro} options={{title: 'Cadastrar Produto', headerStyle: styles.tabBar ,headerShown: false}} />

        <Stack.Screen name="Tela Atualizar Produto" component={TelaAtualizar} options={{title: 'Atualizar Produto', headerStyle: styles.tabBar,headerShown: false}} />

        <Stack.Screen name="Tela Categoria" component={TelaCategoria} options={{title: 'Categorias', headerStyle: styles.tabBar,headerShown: false}} />

        <Stack.Screen name="Tela Cadastrar Categoria" component={TelaCadastroCat} options={{title: 'Cadastrar Categorias', headerStyle: styles.tabBar,headerShown: false}} />

        <Stack.Screen name="Tela Atualizar Categoria" component={TelaAtualizarCat} options={{title: 'Atualizar Categorias', headerStyle: styles.tabBar,headerShown: false}} />
    </Stack.Navigator>
)

