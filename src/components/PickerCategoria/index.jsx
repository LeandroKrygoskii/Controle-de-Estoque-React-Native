import React, { useState ,useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet , View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import Categorias from '../../services/Sqlite/Categoria';


export default function PickerCategoria(props) {
    
    //const [selectCategoria, setSelectCategoria] = useState();
    const [selectedCategoriadata, setSelectCategoriadata] = useState([]);

    const nav = useNavigation();

    useEffect(() => {
        props.navigation.addListener('focus', (e) => {
            getCategoria();
           })
       
      },[props.navigation])

      useEffect(() => {
          getCategoria();
         
      },[])


    async function getCategoria(){
            
        const response = await Categorias.selectAll();
        
        setSelectCategoriadata(response);
        //console.log(response);
      
      }


    function newCategoria() {
        nav.navigate('Nova Categoria')
    }

    return(
 
       <View style={props.selectCategoria ?  styles.Container2 : styles.Container }> 
         
          <TouchableOpacity onPress={newCategoria} style={styles.BtnNewCategoria}>
          <Feather name="plus-square" size={24} color="#52665A" />
          </TouchableOpacity>    
            <Picker
            selectedValue={props?.selectCategoria}
            onValueChange={
                props?.onvalueChange
            }
            style={styles.pickerStyle}
            >   
            {selectedCategoriadata.map((item) => (
                <Picker.Item key={item?.idCategoria} label={item?.nome} value={item?.idCategoria}/>
            ))}
               
            </Picker>
          
        </View>
      
    );
}

const styles = StyleSheet.create({
   
    Container:{
        
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#CFCFCF',
        marginTop: 40,
        flexDirection: 'row',
    },

    Container2:{
        
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#32B768',
        marginTop: 40,
        flexDirection: 'row',
    },
    
    pickerStyle: {
       
        color: '#52665A',      
        fontSize: 18,
        width: '100%',      
        padding: 10,
        marginRight: 30,
    },
  
    BtnNewCategoria:{
       justifyContent: 'center',
       alignItems: 'center',
       padding: 1,
    }
})