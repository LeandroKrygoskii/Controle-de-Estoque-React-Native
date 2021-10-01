import React, { useState } from 'react';
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
    TextBtn
} from './style';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import InputComponent from '../../components/InputComponent';


export default function Saida() {
   
    const [search, setSearch] = useState();
    const [quantity, setQuantity] = useState('4');
    const [showView, setShowView] = useState(false);

    function changeShowView(){
        setShowView(true);
    }

    function renderView(){
       if(showView === true){
            
            return(
                <ViewProduct>
                <Product>
                   <NameProduct>teste</NameProduct>
                   <PriceProduct>Preço: R$25.50</PriceProduct>
                  <ViewQuantity>
                    <QuantityProduct>Estoque : </QuantityProduct>
                     <InputQuantity
                      keyboardType="numeric"
                      value={quantity}
                     />
                     <Btn1>
                         <MaterialIcons name="exposure-neg-1" size={24} color="white" />
                     </Btn1>
                     
                     <Btn2>
                         <MaterialIcons name="exposure-neg-2" size={24} color="white" />
                     </Btn2>
                    
                   </ViewQuantity> 
                </Product>
 
                <BtnCadastrar>
                    <TextBtn>Confirmar Mudança</TextBtn>
                </BtnCadastrar>
             </ViewProduct>
                
            )
           
       }else{
           return null
       }
    }
 
    return(
         <Container>
             <SearchArea>
                <InputComponent 
                holder="Pesquisar..."
                value={search}
                onChangeText={t => setSearch(t)}
                />
                <ViewIcon onPress={() => changeShowView()}>
                 <FontAwesome5  name="search" size={30} color="black" />
                </ViewIcon>
            </SearchArea> 

            <BtnScan>
             <MaterialCommunityIcons name="barcode-scan" size={64} color="black" />
            </BtnScan> 
              
              {renderView()}
           

             
         </Container>
    )

}