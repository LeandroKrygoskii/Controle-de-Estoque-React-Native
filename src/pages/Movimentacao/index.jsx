import React from 'react';
import {Container,Entrada,Saida,TextBox, Btn} from './style';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Movimentacao () {
  
    const navigation = useNavigation();
     
    return(
        <Container>
           
                <Entrada onPress={() => navigation.navigate("Entrada")}>
                    
                        <Entypo name="arrow-with-circle-up" size={44} color="black" />
                        <TextBox>Entrada</TextBox>
                
                </Entrada>
             
            
            
                <Saida onPress={() => navigation.navigate("Saida")}>
           
                    <Entypo name="arrow-with-circle-down" size={44} color="black" />
                    <TextBox>Saída</TextBox>
            
                </Saida>
            
        </Container>
    )
}
