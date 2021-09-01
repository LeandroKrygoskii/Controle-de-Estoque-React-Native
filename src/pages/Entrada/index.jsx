import React, { useState, useEffect, useCallback } from 'react';
import {FlatList} from 'react-native';
import { Container,
    SearchArea,
    ViewIcon,
    BtnScan,
    ViewProduct,
    NameProduct ,
    ViewQuantity,
    Product,
    PriceProduct,
    QuantityProduct,
    InputQuantity,
    Btn1,
    Btn2,
    BtnCadastrar,
    TextBtn,
    ViewProductList
} from './style';
import {useNavigation} from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import InputComponent from '../../components/InputComponent';

import Produtos from '../../services/Sqlite/CadastroProduto';


export default function Entrada() {
   
    const [search, setSearch] = useState('');
    const [quantity, setQuantity] = useState();
    const [newQuantity, setNewQuantity] = useState();
    const [allProducts, setAllProducts] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [idProduto, setIdProduto] = useState();

    const navigation = useNavigation();

  

    useEffect(() => {

        async function getList(){
            const response = await Produtos.selectAll();
            setAllProducts(response);
        } 
         
        getList();
        
    },[])
     
    

     function SerchProductPerName(e){
        
        let text = e.toLowerCase();
        
         let filterData = allProducts.filter((item) => {
             if(item.codBar == e){
                 return item;
             }
            return item.nome.toLowerCase().match(text)
                
         })

        
         if(filterData){
            setFilterData(filterData);
            //filterData.map((item) => {setQuantity(item?.quantidade)})
            //console.log("nova quantidadess" , quantity)
         }
    
    }

     
   

    function handleUpdateProduct (product){
        navigation.navigate("Entrada estoque" , { product })
    }

    const renderItem = useCallback (({item}) =>
        <Product onPress={() => handleUpdateProduct(item)} key={item?.idProduto}>
           <NameProduct>{item?.nome}</NameProduct>
              <PriceProduct>Preço: {item?.valor}</PriceProduct>
                <ViewQuantity>
                   <QuantityProduct>Estoque : {item?.quantidade} </QuantityProduct>
                        
                         {/* <Btn1 onPress={() => console.log(newQuantity)}>
                             <MaterialIcons name="exposure-plus-1" size={24} color="white" />
                         </Btn1>
                         
                         <Btn2>
                             <MaterialIcons name="exposure-plus-2" size={24} color="white" />
                         </Btn2> */}
                        
                </ViewQuantity> 
        </Product>  
    , []
   )

  
 
    return(
         <Container>
             <SearchArea>
                <InputComponent 
                holder="Pesquisar..."
                value={search}
                onChangeText={t =>
                    {setSearch(t);
                    SerchProductPerName(t);}
                }
                />
                <ViewIcon onPress={() => SerchProductPerName(search)}>
                 <FontAwesome5  name="search" size={30} color="black" />
                </ViewIcon>
             </SearchArea> 

            <BtnScan onPress={() => console.log(filterData)}>
             <MaterialCommunityIcons name="barcode-scan" size={64} color="black" />
            </BtnScan> 
            
            <ViewProductList>
                 <FlatList 
                  data={filterData}
                  renderItem={renderItem}
                  keyExtractor={item => String(item.idProduto)}
                  showsVerticalScrollIndicator={false}
                 />
            </ViewProductList>        
         </Container>
    )

}