import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../../Style/Style'
import { Feather as Icon } from '@expo/vector-icons';
import api from'../../routes/Api'
export default function ListaCat(props) {

    async function deletarCategoria() {
        await api.post('/deletar_categoria',{id:props.data.id})
        
    }

    console.log(props.data)

    return (
        <View style={styles.listaCat}>
            <View style={styles.boxCat}>
                
                <View style={{borderRightWidth: 1 ,width:'10%', height:'100%',justifyContent:'center',alignItems:'center',marginLeft:5,paddingRight:10}}>
                    <Text>{props.data.id}</Text>
                </View>
                <View style={{width:'65%',marginLeft:5}}>

                <Text>{props.data.categoria}</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.editButton}
                      onPress={()=>{props.navigation.navigate('Tela Atualizar Categoria',props)}}
                    >
                        <Icon name="edit" color="white" size={15} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={deletarCategoria}
                    >
                        <Icon name="trash" color="white" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}