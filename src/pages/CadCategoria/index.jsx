import React,{ useState } from 'react';
import {Container,TextBtn,Title, ViewForm} from './style';
import InputComponent from '../../components/InputComponent';
import BtnConfirm from '../../components/BtnConfirm';
import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Categoria from '../../services/Sqlite/Categoria';


export default function CadCategoria(){

    const [categoria, setCategoria] = useState("");
    const navigation = useNavigation();

     async function handleCategoria(){
         
      
         if(categoria == ""){
             
            Alert.alert("Campo vazio", "Preencha o campo para cadastrar");

         }else{
            console.log(categoria);
            const response = await Categoria.createCategoria(categoria);

            if(response != 0){
                Alert.alert("Sucesso", "Cadastro Efetuado com sucesso. Agora sua nova categoria aparecerá ao cadastrar um novo produto.");
                navigation.navigate("Cadastro de Produto");
            }else{
                Alert.alert("Erro" , "Erro ao cadastrar uma nova categoria");
            }
         }
       
     }

    return(
      
        <Container>
            <Title>Cadastre uma nova categoria</Title>

           <ViewForm>             
                <InputComponent 
                    holder="ex: (Eletrodomésticos, Movéis, etc...)"
                    value={categoria}
                    onChangeText={t => setCategoria(t)}
                />
                <BtnConfirm 
                    onPress={() => handleCategoria()}
                    text="Confirmar"
                />
            </ViewForm> 
           
        </Container>
    )
}