import React, {useState} from 'react';
import { Container, 
    SearchRow, 
    SearchArea, 
    ViewIcon, 
    BtnScan, 
    ViewProduct, 
    Product, 
    NameProduct, 
    PriceProduct, 
    QuantityProduct,
    BtnSearch,
    TxtSearchAll,
    SectionBtns,
    ProductContentColum,
    ProductContentRow,
    ViewScan,
    BtnScanAgain,
    TextBtn
 } from './style';

import InputComponent from '../../components/InputComponent';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Produto from '../../services/Sqlite/CadastroProduto';
import { Alert ,FlatList,StyleSheet,Text,Dimensions } from 'react-native';
import { useEffect } from 'react';
import AutoComplete from 'react-native-autocomplete-input';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {BarCodeScanner,BarCodeBounds , BarCodeScannerResult} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import BarcodeMask from 'react-native-barcode-mask';

//Components
import ProductCard from '../../components/ProductCard';
import { useCallback } from 'react';

export default function Consulta(){
    
    const [data, setData] = useState([]);
    const [filterDatas, setfilterData] = useState([]);
    const [searchName, setSearchName] = useState();
    const [searchcod, setSearchcod] = useState();
    const [showView ,setShowView] = useState(false);


    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    
    const navigation = useNavigation();


    useEffect(() => {
        getProducts();
    } ,[])

    const searchText = (e) => {
     let text = e.toLowerCase();

     let filterData = data.filter((item) =>{
         console.log(item.nome);
         if(item.codBar == text){
             return item
         }
         return item.nome.toLowerCase().match(text)
     })

     setfilterData(filterData);
     //console.log(filterDatas)
    }

    const searchAll = () => {
        setfilterData(data);
    }

    const searchNumber = (e) => {
        let number = e;
   
        let filterData = data.filter((item) =>{
            if(item.codBar == number){
                //console.log( "TESTE" + item)
                return item
            }   
        })
    
        setfilterData(filterData)
        
    }

    async function getProducts(){
       
            const response = await Produto.selectAll();
            if(response !=""){
                setData(response);
                console.log(data)
            }
            else{
                Alert.alert("Você ainda não tem nenhum produto cadastrado!")
            }      
    }

    
    function handleDetailProduct (product){
        navigation.navigate("Detalhes do Produto" , { product })
    }


    const renderItem = useCallback (({item}) =>  
        <Product onPress={() => handleDetailProduct(item)} key={item?.idProduto}>
            <NameProduct>{item?.nome}</NameProduct>
   
                <QuantityProduct>Estoque: {item?.quantidade}</QuantityProduct>
        </Product>, []
    ) 

    //SCAN BARCODE//
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
        checkMultiPermissions();
              
    },[])

    const scanCodeBtn = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    async function checkMultiPermissions() {
        const { status } = await BarCodeScanner.getPermissionsAsync(
          
        );
        if (status !== 'granted') {
         console.log("Nao tem permissao")
        }
        else{
            console.log("ja tem permissao")
        }
      }
  
  
    const handleBarCodeScanned = ({ type, data }) => {
      scanCodeBtn();     
      setScanned(true);    

        Alert.alert('Confirmar', `O código está correto? ${data}`,[
          {
            text: 'Não ❌',
            type: 'cancel',
          },
          {
            text: 'Sim ✅',
            onPress: () =>{
              setSearchcod(data),
              setShowView(false);
            }
          }
        ])
      
    };

    const test = async () => {
        await scanCodeBtn();
        setShowView(true);
        console.log(showView);
    }
   
    // if (hasPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }
   
    return(
        <Container>
             
             {showView &&  
              
                <>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={[StyleSheet.absoluteFillObject, styles.container]}                
                    >
                   
                    <BarcodeMask edgeColor="#ee2c25" showAnimatedLine/>
                    </BarCodeScanner>
                    {scanned && <BtnScanAgain onPress={() => setScanned(false)}>
                                     <TextBtn>Escanear novamente</TextBtn>
                                 </BtnScanAgain>
                    }
                </>
             }
          
          {!showView && 
           <>   
            <SearchArea>
             <SearchRow>
                <InputComponent 
                holder="Pesquise pelo nome do Produto..."
                value={searchName , searchcod}
                onChangeText={t => {    

                    setSearchName(t);
                    searchText(t);
                    setSearchcod(t);
                }}
                />

                 <ViewIcon onPress={() => searchText(searchName || searchcod)}>
                             <FontAwesome name="search" size={24} color="black" />
                 </ViewIcon>
               
                </SearchRow>

            
    
                <SectionBtns>
                    <BtnSearch onPress={() => searchAll()}>
                                                 
                        <MaterialCommunityIcons name="database-search" size={34} color="black" /> 
                        <TxtSearchAll>
                            Todos
                        </TxtSearchAll>                 
                    </BtnSearch>

                    <BtnSearch onPress={() => test()}> 
                            
                            <MaterialCommunityIcons name="barcode-scan" size={34} color="black" />
                            <TxtSearchAll>Escanear</TxtSearchAll>     
                    </BtnSearch>
                </SectionBtns>

                 
            </SearchArea> 

            <ViewProduct>
            <FlatList 
            data={filterDatas}
                keyExtractor={item => String(item.idProduto)}                     
                renderItem={renderItem}           
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.1}                        
                />             
            </ViewProduct>
                    
           </>
             
          }
           
            
            

            
         
        
            
        </Container>
    )
}

const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
   
        },
    
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
   
        separator: {
            marginVertical: 30,
            height: 1,
            width: '80%', 
        },
   
});