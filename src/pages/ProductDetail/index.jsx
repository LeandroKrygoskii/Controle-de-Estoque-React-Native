import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Container,
   Content,
   SubTitle, 
   Title, 
   Header,
   ViewImgProduct,
   ImgProduct,
   ViewContentText,  
   TextDesc,
   ViewDesc,
   Row,
   ViewMain,
   ViewAlignCenter,
   Strong2,
   TitleDesc,
   DetailSquare,
   Row2,
   TextSquare,
   Unidade,
   ViewContentHeader,
   ViewContentHeaderText,
   BtnMais,
   TextBtnMais,
   MoreInfo,
   TextInfo,
   MoreInfoTitle

} from './style';
import { useRoute , useNavigation} from '@react-navigation/core';
import ImgBox from '../../images/box4.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Categoria from '../../services/Sqlite/Categoria';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { Modalize } from 'react-native-modalize';


export default function ProductDetail(){
   
   const [categoriaProduto, setCategoriaProduto] = useState([]);
   const [categoriaName, setCategoriaName] = useState();
    
   useEffect(() => {
      async function fetchMyAPI(){
         
         try {
            const res = await Categoria.selectAll();
            setCategoriaProduto(res);
            
         } catch (error) {
            console.log(error)
         }
         
        
      }
      fetchMyAPI();
   } ,[])

   useEffect(() => {
      const id = product.id_categoria;
      categoriaProduto.filter(cat => {
         if(cat.idCategoria == id){
            setCategoriaName(cat.nome)
         }
         //cat.idCategoria.includes(id)               
      });
      //setCategoriaName(filter); 
   }, [categoriaProduto])
    

    const route = useRoute();
    const { product } = route.params;
    const [arredondado , setArredondado] = useState();
    const modalizeRef = useRef(null);
    //console.log(product.name)
    

    function onOpen(){
       modalizeRef.current?.open();
       //console.log(categoriaProduto)
    }

    

    
    
    
    //pega o valor pela rota  
    const str = product.valor;
    //retira o cifrão
    const teste= str.replace('R$', '');
    const removePointer = teste.replace('.', '');
    const changeVirgula = removePointer.replace(',', '.')
    //por fim converte para double
    const result= parseFloat(changeVirgula);

    //total quantidade
    const totalValue = result * product.quantidade;
    //console.log(totalValue);
    const valorFormatado = intl.NumberFormat('pt-BR', {style: 'decimal'}).format(totalValue)

     //Total Peso
     const totalPeso = product.peso * product.quantidade
     const convertPeso = totalPeso.toFixed(1);
   //   
   //   
   //  

     
    return(
          <Container>
              <Header>
              
               <Content>
                              
                  <ViewImgProduct>
                     <ImgProduct source={ImgBox}/>
                     
                  </ViewImgProduct>
                  <ViewContentHeader>
                     <ViewContentHeaderText>
                        <Title>{product.nome}</Title>
                        <SubTitle>Cód produto </SubTitle>
                        <SubTitle style={{fontWeight:'700', color:"#1a1a1a"}}> {product.codBar} </SubTitle>
                     </ViewContentHeaderText>
                     
                     <BtnMais onPress={onOpen}>
                        <TextBtnMais >
                           Mais 
                        </TextBtnMais>
                     </BtnMais>
                  </ViewContentHeader>

                  <Modalize
                   ref={modalizeRef}
                   snapPoint={220}
                  >
                     <MoreInfo>
                        <MoreInfoTitle>Dados do produto</MoreInfoTitle>
                        <TextInfo>
                           Produto : {product.nome}
                        </TextInfo>
                        <TextInfo>
                           Preço unidade : {product.valor}
                        </TextInfo>
                        <TextInfo>
                           Peso unidade: {product.peso} kg
                        </TextInfo>
                        <TextInfo>
                           Categoria : {categoriaName}
                        </TextInfo>
                     </MoreInfo>
                     
                  </Modalize>   
                  
               </Content>
              </Header>

              <ViewMain showsVerticalScrollIndicator={false}>
                <ViewAlignCenter>
                   <Row2>
                   <DetailSquare>
                     <Entypo name="archive" size={24} color="white" />
                       <TextSquare>
                          {product.quantidade} 
                       </TextSquare>
                       <Unidade>
                        Uni em estoque
                       </Unidade>
                    </DetailSquare>
                    

                    <DetailSquare>
                      <MaterialCommunityIcons name="home-currency-usd" size={24} color="white" />
                       <TextSquare>
                          {valorFormatado}
                       </TextSquare>
                       <Unidade>
                          R$
                       </Unidade>
                    </DetailSquare>
                  </Row2>

                  <Row2>
                   <DetailSquare>
                    <MaterialCommunityIcons name="weight-kilogram" size={24} color="white" />
                       <TextSquare>
                          {totalPeso}
                       </TextSquare>
                       <Unidade>
                          kg
                       </Unidade>
                    </DetailSquare>
                    
                    <DetailSquare>
                    <AntDesign name="edit" size={24} color="white" />
                       <TextSquare>
                          Editar
                       </TextSquare>
                       <Unidade>
                         Produto
                       </Unidade>
                    </DetailSquare>
                  </Row2>
                </ViewAlignCenter> 
              </ViewMain>
              
          </Container>
    )

}