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
   MoreInfoTitle,
   DivRow,
   BtnIcon,
   DivTitle,
   TitleData,
   CardTitle,
   ScrollHeader,
   MainHeader

} from './style';
import { Alert } from 'react-native';
import { useRoute , useNavigation} from '@react-navigation/core';
import ImgBox from '../../images/box4.png';

//DataBase
import Categoria from '../../services/Sqlite/Categoria';
import Produtos from '../../services/Sqlite/CadastroProduto';

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//intl conversor para moeda
import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

//modal
import { Modalize } from 'react-native-modalize';


export default function ProductDetail(){
   
   const [categoriaProduto, setCategoriaProduto] = useState([]);
   const [categoriaName, setCategoriaName] = useState();
   const [quantidadeTotalEstoque, setQuantidadeTotalEstoque] = useState(0);

   const navigation = useNavigation();

    const route = useRoute();
    const { product } = route.params;
    const [arredondado , setArredondado] = useState();
    const modalizeRef = useRef(null);
    
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
            setCategoriaName(cat.name)
         }
         //cat.idCategoria.includes(id)               
      });
      //setCategoriaName(filter); 
   }, [categoriaProduto])
    

    
    //console.log(product.name)
    

    function onOpen(){
       modalizeRef.current?.open();
       //console.log(categoriaProduto)
    }

    

    
    
    
    //pega o valor pela rota  
    const str = product.valor;
 
    const result= parseFloat(str);
   
     
    //total quantidade
    const totalValue = result * product.quantidade;
    const valorFormatado = intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)

     //Total Peso
     const totalPeso = product.peso * product.quantidade
     const convertPeso = totalPeso.toFixed(1);
   //   
   async function handleDelete(){
         
      Alert.alert("Deletar produto ❓", "Tem Certeza que deseja excluir esse produto?", [
        {
          text: 'Não ❌',
          style: 'cancel',
        },
        {
          text: 'Sim ✅',
          onPress: async () =>{
               console.log(product.idProduto)
               try {
                  const response = await Produtos.deletebyid(product.idProduto)
                  console.log("responsee" + response);
                  
                  if(response > 0){
                     Alert.alert('Sucesso', 'produto deletado')
                     navigation.navigate("HomeScreen")
                  }
               } catch (error) {
                  console.log("Algum erro : ", error)
               }
               
          }
        }
      ]) 
    }

   
     
    return(
          <Container>
              <Header>
              
               <Content>
                <ScrollHeader showsVerticalScrollIndicator={false}>
                   <MainHeader>                            
                     <ViewImgProduct>
                        <ImgProduct source={ImgBox}/>
                        
                     </ViewImgProduct>
                     <ViewContentHeader>
                        <ViewContentHeaderText>
                           <Title>{product.nome}</Title>
                           <SubTitle style={{marginTop:10}}>Cód produto </SubTitle>
                           <SubTitle style={{fontWeight:'700', color:"#1a1a1a",marginBottom:12}}> {product.codBar} </SubTitle>
                           <SubTitle>{product.descricao}</SubTitle>
                        </ViewContentHeaderText>
                        
                        <BtnMais onPress={onOpen}>
                           <TextBtnMais >
                              Mais 
                           </TextBtnMais>
                        </BtnMais>
                     </ViewContentHeader>
                  </MainHeader> 
               </ScrollHeader> 
                  <Modalize
                   ref={modalizeRef}
                   snapPoint={220}
                  >
                     <MoreInfo>
                        <DivRow>
                         <MoreInfoTitle>Dados do produto</MoreInfoTitle>
                         <BtnIcon onPress={() => handleDelete()}>
                            <MaterialCommunityIcons name="delete-circle-outline" size={34} color="#d33d1b"/>
                         </BtnIcon>
                         
                         <BtnIcon onPress={() => navigation.navigate('Atualizar produto', { product })}>
                           <Feather name="edit" size={24} color="#26fc91" style={{marginRight:30}}/>
                         </BtnIcon>
                         
                        </DivRow>
                        
                        <DivTitle>
                           <CardTitle>
                              <TitleData>Produto :</TitleData>
                              <TextInfo>
                               {product.nome}
                            </TextInfo>
                           </CardTitle>
                           
                          
                        </DivTitle>
                        
                        <DivTitle>
                           <CardTitle>
                              <TitleData>Preço unidade :</TitleData>
                              <TextInfo>
                               {product.valor}
                              </TextInfo>
                           </CardTitle>                 
                           
                        </DivTitle>

                        <DivTitle>
                           <CardTitle>
                              <TitleData>Peso unidade :</TitleData> 
                              <TextInfo>
                               {product.peso} kg
                            </TextInfo>
                           </CardTitle>
                                             
                           
                        </DivTitle>

                        <DivTitle>
                           <CardTitle>
                              <TitleData> Categoria :</TitleData>
                              <TextInfo>
                              {categoriaName}
                           </TextInfo>
                           </CardTitle>
                        
                           
                        </DivTitle>
                     </MoreInfo>
                     
                  </Modalize>   
                  
               </Content>
              </Header>

              <ViewMain showsVerticalScrollIndicator={false}>
                <ViewAlignCenter>
                   <Row2>
                   <DetailSquare>
                     <Entypo name="archive" size={28} color="white" />
                       <TextSquare>
                          {product.quantidade} 
                       </TextSquare>
                       <Unidade>
                        Uni em estoque
                       </Unidade>
                    </DetailSquare>
                    

                    <DetailSquare >
                      <MaterialCommunityIcons name="home-currency-usd" size={28} color="white" />
                       <TextSquare style={{fontSize:18}}>
                          {valorFormatado}
                       </TextSquare>
                       <Unidade>
                          valor total
                       </Unidade>
                    </DetailSquare>
                  </Row2>

                  <Row2>
                   <DetailSquare>
                    <MaterialCommunityIcons name="weight-kilogram" size={28} color="white" />
                       <TextSquare>
                          {convertPeso}
                       </TextSquare>
                       <Unidade>
                          kg
                       </Unidade>
                    </DetailSquare>
                    
                    <DetailSquare>
                    <AntDesign name="edit" size={28} color="white" />
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