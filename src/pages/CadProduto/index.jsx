import React, {useState, useEffect} from 'react';
import {Keyboarder,
    Container,
    InputArea,
    BtnCadastrar,
    Inputs,
    TextBtn,
    Title,
    TouchableWithout,
    ViewCode,
    BtnCode,
    InputCode,
    Main,
    BtnScanAgain
    
} from './style';
import InputComponent from '../../components/InputComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';

//Components//
import PickerCategoria from '../../components/PickerCategoria';
import BtnConfirm from '../../components/BtnConfirm';

//models//
import Categorias from '../../services/Sqlite/Categoria';
import CadastroProduto from '../../services/Sqlite/CadastroProduto';
import {BarCodeScanner} from 'expo-barcode-scanner';
import BarCodeMask from 'react-native-barcode-mask';


import { 
    Keyboard,
    StyleSheet
  } from 'react-native';
import { Alert } from 'react-native';
import { View } from 'react-native';

export default function CadProduto({navigation}){
     
    const [codigo, setCodigo] = useState();
    const [selectedCategoria, setSelectCategoria] = useState();
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [quantitymin, setQuantityMin] = useState();
    const [value, setValue] = useState();
    const [desc, setDesc] = useState();
    const [peso, setPeso] = useState();

    const [dataCategoria, setDataCategoria] = useState([]);

     
    const nav = useNavigation();


    //EFEITOS BORDER//
    const [isFocusName, setIsFocusName] = useState(false);
    const [isFocusValor, setIsFocusValor] = useState(false);
    const [isFocusQuantity, setIsFocusQuantity] = useState(false);
    const [isFocuscodigo, setIsFocusCodigo] = useState();
    const [isFocusQuantityMin, setIsFocusQuantityMin] = useState();
    const [isFocusDesc, setIsFocusDesc] = useState();
    const [isFocusPeso, setIsFocusPeso] = useState();

    const [isFilledName, setIsFilledName] = useState(false);
    const [isFilledValor, setIsFilledValor] = useState(false);
    const [isFilledQuantity, setIsFilledQuantity] = useState(false);
    const [isFilledCodigo, setIsFilledCodigo] = useState(false);
    const [isFilledQuantityMin, setIsFilledQuantityMin] = useState(false);
    const [isFilledDesc, setIsFilledDesc] = useState(false);
    const [isFilledPeso, setIsFilledPeso] = useState(false);
    
    
   //\EFEITOS BORDER\//
   
    function handleInputBlurName() {
        setIsFocusName(false);
        setIsFilledName(!!name)
      }
      function handleInputBlurValor() {
        setIsFocusValor(false);
        setIsFilledValor(!!value)
      }
      function handleInputBlurCodigo() {
        setIsFocusCodigo(false);
        setIsFilledCodigo(!!codigo)
      }
      function handleInputBlurQuantity() {
        setIsFocusQuantity(false);
        setIsFilledQuantity(!!quantity)
      }

      function handleInputBlurQuantityMin() {
        setIsFocusQuantityMin(false);
        setIsFilledQuantityMin(!!quantitymin);
      }

      function handleInputBlurDesc() {
        setIsFocusDesc(false);
        setIsFilledDesc(!!desc)
      }
      
      function handleInputBlurPeso(){
        setIsFocusPeso(false);
        setIsFilledPeso(!!peso)
      }

      
      
      function handleInputFocusName() {
        setIsFocusName(true);
      }
    
      function handleInputFocusValor() {
        setIsFocusValor(true);
     }
    
     function handleInputFocusQuantity() {
        setIsFocusQuantity(true);
    }
     
    function handleInputFocusCodigo() {
        setIsFocusCodigo(true);
    }

    function handleInputFocusQuantityMin() {
      setIsFocusQuantityMin(true);
     }

     function handleInputFocusDesc() {
      setIsFocusDesc(true);
    }

    function handleInputFocusPeso() {
      setIsFocusPeso(true);
    }

    
    
      function handleInputChangeName(name) {
        setIsFilledName(!!name);
        setName(name);
      }
    
      function handleInputChangeValor(valor) {
        setValue(valor);
        setIsFilledValor(!!valor);
      }

      function handleInputChangeQuantitymin(quantitymin){
        setIsFilledQuantityMin(!!quantitymin);
        setQuantityMin(quantitymin)
      }

      
      function handleInputChangeDesc(desc){
        setIsFilledDesc(!!desc);
        setDesc(desc)
      }

      function handleInputChangePeso(peso){
        setIsFilledPeso(!!peso);
        setPeso(peso)
      }
    
      function handleInputChangeQuantity(quantity) {
        setQuantity(quantity);
        setIsFilledQuantity(!!quantity);
      }

      function handleInputChangeCodigo(codigo) {    
        setCodigo(codigo);
        setIsFilledCodigo(!!codigo);
      }
      
     



      async function handleConfirm (){
         
        //console.log(name, quantity, quantitymin, value, desc, codigo, selectedCategoria, peso)
        if(name && quantity && quantitymin && value && codigo && peso && selectedCategoria != undefined){
          const pesoReplace = peso.replace(",",".");
          const response = await CadastroProduto.createProduto({codBar: codigo, nome: name , descricao: desc, peso: pesoReplace, quantidade:quantity, qtMin:quantitymin, valor:value, id_categoria: selectedCategoria });
          console.log(response);
          
          if(response > 0){
            Alert.alert("Cadastro bem sucedido")
            nav.navigate("Home")
          }else{
            Alert.alert("Algo deu errado ao cadastrar, verfique se não existe caracteres especiais nos campos.")
          }

        }else{
          Alert.alert("Campo vazio","Preencha todos os campos para cadastrar um novo produto.")
        };
  
      }

      async function getCategoria(){
            
        const response = await Categorias.selectAll();
        
        setDataCategoria(response);
        //console.log("Cadastro de produtos getCategeoria" , response);
      
      }


    //SCAN BARCODE//
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showView ,setShowView] = useState(false);
    
    useEffect(() => {
        checkMultiPermissions();
        //scanCodeBtn();
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
            console.log(status);
        }
      }
  
  
    const handleBarCodeScanned =  ({ type, data }) => {
          
      setScanned(true);    
      Alert.alert('Confirmar', `O código está correto? ${data}`,[
          {
            text: 'Não ❌',
            type: 'cancel',
          },
          {
            text: 'Sim ✅',
            onPress: () =>{
              setCodigo(data), 
              setShowView(false);
              
            }
          }
        ])
      
    };

    const showViewScan = async () => {
       await scanCodeBtn(); 
        setShowView(true);
        //console.log(showView);
    }
    

    return(
        
           <Main>
                  {showView && 
                   <>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={[StyleSheet.absoluteFillObject, styles.container]}                
                    >
                      
                      
                      <BarCodeMask edgeColor="#62B1F6" showAnimatedLine/>

                   
                    </BarCodeScanner>
                    {scanned && <BtnScanAgain onPress={() => setScanned(false)}>
                                      <Title>Escanear novamente</Title>
                                  </BtnScanAgain>
                    }
                   </>
                   
                  }

            <TouchableWithout onPress={Keyboard.dismiss}>
                <Container>

                  
                   {!showView &&  
                <InputArea>
                    <ViewCode
                      
                      style={[
                        (isFocuscodigo || isFilledCodigo) && {borderColor:'#32B768'}
                     ]}
                     >
                        <InputCode
                         keyboardType="numeric"
                        placeholder="Código"
                        value={codigo}
                        onChangeText={handleInputChangeCodigo}
                        onBlur={handleInputBlurCodigo}
                        onFocus={handleInputFocusCodigo}
                        />
                        <BtnCode onPress={() => showViewScan()}>
                         <MaterialCommunityIcons 
                         name="barcode" 
                         size={44} 
                         color="black" 
                         />
                        </BtnCode>
                    </ViewCode>

                    <PickerCategoria 
                     navigation={navigation}
                     selectCategoria ={selectedCategoria}
                     onvalueChange= {(value) => {
                       
                       if(value){
                         setSelectCategoria(value);                        
                       }
                       
                     }}
                    />



                    <Inputs
                    style={[
                        (isFocusName || isFilledName) && {borderColor: '#32B768'}
                     ]}
                        placeholder="Nome do Produto"
                        value={name}
                        onChangeText={handleInputChangeName}
                        onBlur={handleInputBlurName}
                        onFocus={handleInputFocusName}
                     />

                    <Inputs
                    style={[
                        (isFocusDesc || isFilledDesc) && {borderColor: '#32B768'}
                     ]}
                        placeholder="Pequena Descrição"
                        value={desc}
                        onChangeText={handleInputChangeDesc}
                        onBlur={handleInputBlurDesc}
                        onFocus={handleInputFocusDesc}
                     />

                    <Inputs 
                    style={[
                        (isFocusQuantity || isFilledQuantity) && {borderColor: '#32B768'}
                     ]}
                        placeholder="Quantidade em estoque"
                        value={quantity}
                        keyboardType="numeric"
                        onChangeText={handleInputChangeQuantity}
                        onBlur={handleInputBlurQuantity}
                        onFocus={handleInputFocusQuantity}
                        />

                 

                    <Inputs
                      style={[
                          (isFocusQuantityMin || isFilledQuantityMin) && {borderColor: '#32B768'}
                      ]}
                          placeholder="Quantidade Minima(para alerta-lo)"
                          value={quantitymin}
                          keyboardType="numeric"
                          onChangeText={handleInputChangeQuantitymin}
                          onBlur={handleInputBlurQuantityMin}
                          onFocus={handleInputFocusQuantityMin}
                      />

                
                    <Inputs
                      style={[
                          (isFocusPeso || isFilledPeso) && {borderColor: '#32B768'}
                      ]}
                          placeholder="peso"
                          keyboardType="numeric"
                          value={peso}
                          onChangeText={handleInputChangePeso}
                          onBlur={handleInputBlurPeso}
                          onFocus={handleInputFocusPeso}
                      />

                    <TextInputMask
                      
                      style={[styles.InputStyles,
                          (isFocusValor || isFilledValor) && {borderColor: '#32B768'}
                        ]}
                          placeholder="Valor Unitário"
                          value={value}
                          type={'money'}
                          options={{
                              precision: 2,
                              separator: ',',
                              delimiter: '.',
                              unit: 'R$',
                              suffixUnit: ''
                          }}
                          onChangeText={handleInputChangeValor}
                          onBlur={handleInputBlurValor}
                          onFocus={handleInputFocusValor}
                      /> 

                        <BtnConfirm text="Cadastrar" onPress={() => handleConfirm()}/> 
               </InputArea>
              }
          </Container>
         </TouchableWithout>
        </Main>
         
    )
}

const styles = StyleSheet.create({
    InputStyles:{
       borderBottomWidth: 2,
       
       color: '#52665A',
       borderColor: '#CFCFCF',
       fontSize: 18,
       width: '100%',
       marginTop: 40,
       padding: 10
    },
    container: {
      flex: 1,
      
      alignItems:'center',
      justifyContent: 'center',
      
      
   },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%', 
    },
 });

 