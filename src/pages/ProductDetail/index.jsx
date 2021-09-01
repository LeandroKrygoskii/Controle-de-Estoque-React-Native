import React from 'react';
import {Container,
   Content,
   SubTitle, 
   Title, 
   Header,
   ViewImgProduct,
   ImgProduct,
   ViewContentText,
   Strong,
   TextDesc,
   ViewDesc,
   Row,
   ViewMain,
   TextEstoque,
   CardEstoque,
   NumberEstoque,
   Btn,
   ViewAlignCenter,
   Circle,
   Strong2,
   TitleDesc

} from './style';
import { useRoute , useNavigation} from '@react-navigation/core';
import ImgBox from '../../images/box-png.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function ProductDetail(){

    const route = useRoute();
    const { product } = route.params;

    //console.log(product.name)

   
   

      
    const str = product.valor;

    const teste= str.replace('R$','');
    
    const result= parseFloat(teste);
     console.log(result)
    
    const totalValue = result * product.quantidade;
    
    
    const arredondado=(+totalValue).toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
     console.log("Valor arredondado:" + arredondado)
    
     const totalPeso = product.peso * product.quantidade
     const convertPeso = totalPeso.toFixed(1);
     console.log("peso total  " + convertPeso)
     //totalPeso.toString();

     function stripZeros(str) {
      return parseFloat(str)
        .toString()
        .replace('.', ',');
     }
     

     //const arredondaPeso = (+totalPeso).toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
     
     //console.log(pesoTotal)
    return(
          <Container>
              <Header>
              
               <Content>
                  
                <Row>
                  <ViewImgProduct>
                     <ImgProduct source={ImgBox}/>
                  </ViewImgProduct>

                  <ViewContentText>
                  <Title>{product.nome}</Title>
                     <SubTitle>Código produto:{'\n'} <Strong2>{product.codBar}</Strong2></SubTitle>
                     <SubTitle>Peso: {'\n'} <Strong2>{product.peso}kg</Strong2></SubTitle>
                     <SubTitle>Preço: {'\n'} <Strong2>{product.valor}</Strong2></SubTitle>
                  </ViewContentText>
               </Row>
                  <ViewDesc>
                     <TitleDesc>Descrição:</TitleDesc>
                     <TextDesc>{product.descricao}</TextDesc>
                  </ViewDesc>
               </Content>
              </Header>

              <ViewMain showsVerticalScrollIndicator={false}>
                <ViewAlignCenter>
                  <CardEstoque>
                     <Circle>
                       <Entypo name="archive" size={24} color="black" />
                     </Circle>
                  
                     <TextEstoque>Estoque total</TextEstoque>
                     <NumberEstoque><Strong>{product.quantidade} uni</Strong></NumberEstoque>
                  </CardEstoque>
                  <CardEstoque>
                     <Circle>
                        <MaterialCommunityIcons name="weight-kilogram" size={24} color="black" />
                     </Circle>
                     <TextEstoque>   Peso total</TextEstoque>
                     <NumberEstoque> <Strong>{ convertPeso }Kg</Strong></NumberEstoque>
                  </CardEstoque>
                  <CardEstoque>
                  {/* <MaterialCommunityIcons name="database-import" size={24} color="black" /> */}
                  <Circle>
                     <MaterialCommunityIcons name="home-currency-usd" size={24} color="black" />
                  </Circle>
                     <TextEstoque>Preço total</TextEstoque>
                     <NumberEstoque><Strong>R${arredondado}</Strong></NumberEstoque>
                  </CardEstoque>
                </ViewAlignCenter> 
              </ViewMain>
              
          </Container>
    )

}