import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
 flex:1;
 align-items: center;
 
`;


export const SearchArea = styled.View`
 
 width: 100%;
 align-items: center;
 padding:10px;
 justify-content: center;
 flex-direction: row;
 margin-top: 8px;
`;

export const ViewIcon = styled.TouchableOpacity`
 margin-bottom: 34px;
 margin-left: 5px;
 border-radius: 10px;
 background-color: #22ff7e;
 padding:10px;
`;

export const BtnScan = styled.TouchableOpacity`
 
`;

export const ViewProduct = styled.View`
 
 flex:1;
 align-items: center;
 width: 100%;
 padding: 16px 24px;
`;

export const Product = styled.View`
  width: 100%;
  
  padding:10px;
  
  background-color: #e2e2e2;
  border-radius: 10px;
`;


export const NameProduct = styled.Text`
 font-size: 22px;
 font-weight: 500;
 padding:10px;
`;

export const PriceProduct= styled.Text`
 font-size: 16px;
 color: #3d3d3d;
 padding:10px;
`;

export const QuantityProduct = styled.Text`
 font-size: 16px;
 color: #3d3d3d;
 padding:10px;
`;

export const ViewQuantity = styled.View`
 
 flex-direction: row;
 align-items: center;
`;

export const InputQuantity = styled.TextInput`
 background-color: #fff;
 height: 90%;
 margin-top: 2px;
 border-radius: 10px;
 width: 20%;
 padding:10px;
 text-align:center;
`;

export const Btn1 = styled.TouchableOpacity`
    background-color: green;
    flex:0.3;
    padding:10px;
    width: 30px;
    border-radius: 10px;
    align-items: center;
    margin-left: 10px;
    
`;

export const Btn2 = styled.TouchableOpacity`
    background-color: green;
    flex:0.3;
    padding:10px;
    margin-left: 10px;
    border-radius: 10px;
    align-items: center;
    
`;

export const BtnCadastrar = styled.TouchableOpacity`
  height: 56px;
  width: 60%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: #32B768;
  margin-top: 48px;
 
`;

export const TextBtn = styled.Text`
 color: #FFFFFF;
 font-size: 20px;
`;