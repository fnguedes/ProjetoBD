import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../../Style/Style'
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../routes/Api'
export default function Produto(props) {
    async function deletarProduto (){
        const response = await api.post('/deletar_produto',{id:props.id})
    }

    return (
        <View style={styles.boxProduto} >
            <View style={styles.id}>
                <Text style={{color:'#fff'}}>{props.id}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.nome}>
                    <Text style={{color:'#fff'}}>{props.nome}</Text>
                </View>
                <View style={styles.categoria}>
                    <Text style={{color:'#fff'}}>{props.categoria}</Text>

                </View>
            </View>
            <View style={styles.editDelet}>
                <TouchableOpacity
                    style={styles.editButton}
                  onPress={()=>{props.navigation.navigate('Tela Atualizar Produto',[props])}}
                >
                    <Icon name="edit" color="white" size={15} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={deletarProduto}
                >
                    <Icon name="trash" color="white" size={15} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

