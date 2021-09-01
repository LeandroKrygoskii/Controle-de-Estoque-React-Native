import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
 flex:1;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 padding:10px;
`;

export const Entrada = styled.TouchableOpacity`
 flex:1;
 height: 200px;
 background-color: #2dca0d;
 border-radius: 30px;
 align-items: center;
 justify-content: center;
 margin-right: 18px;
`;


export const Saida = styled.TouchableOpacity`
 flex:1;
 height: 200px;
 border-radius: 30px;
 background-color: #e14226;
 align-items: center;
 justify-content: center;
`;

export const TextBox = styled.Text`
  margin-top: 18px;
  font-size: 18px;
  font-weight: bold;
`;