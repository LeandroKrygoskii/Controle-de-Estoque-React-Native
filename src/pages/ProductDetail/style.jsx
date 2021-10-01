import styled from 'styled-components/native';

export const Container = styled.View`
 
 flex:1;


`;

export const Header = styled.View`
 width: 100%;
 background-color: #0e8d61;
 height: 65%;

 
 align-items:center;

`;

export const Content = styled.View`

 flex:1;
 width: 100%;
 flex-direction: column;
 border-bottom-left-radius: 60px;
 background-color: #f8f8f8;
 align-items: center;
`;

export const Title = styled.Text`
 font-size: 36px;
 font-weight: bold;
 
 color: #1a1a1a;
`;

export const ViewImgProduct = styled.View`
 align-items: center;
 justify-content: center;
 width: 100%;
 margin-top: 8px;
 
`;

export const ImgProduct = styled.Image`
 height: 250px;
 width: 300px;
 margin-top: 10px;
`;

export const ViewContentText = styled.View`
 flex-direction: column;
 flex:1;
 margin-top: 8px;
 
 padding:10px;
 align-items: flex-end;
`;

export const Row = styled.View`
 flex-direction: row;
 align-items: center;
 padding: 16px 24px;
 
`;

export const SubTitle = styled.Text`

 font-size: 16px;
 justify-content: flex-end;
 color: #999999;
  text-align: right;
`;

export const TitleDesc = styled.Text`
  color: #1a1a1a;
  font-size: 16px;
`;



export const Strong2 = styled.Text`
 font-size: 16px;
 font-weight: 700;
 color: #1f1e1e;
`;

export const ViewDesc = styled.View`
 padding: 10px;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 margin-left: 40px;
 
`;

export const TextDesc = styled.Text`
  color: #1f1e1e;
`;

export const ViewMain = styled.ScrollView`

 flex:1;
 width: 100%;
 flex-direction: column;
 background-color: #0e8d61;
`;


export const ViewAlignCenter = styled.View`
 padding: 16px 24px;
 justify-content: center;
 height: 100%;
`;


export const DetailSquare = styled.View`
  
background-color: #0e9e6e;
 opacity: 0.9;
 border-radius: 20px;
 width: 130px;
 height: 130px;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const TextSquare = styled.Text`
 font-size: 24px;
 font-weight: 700;
 color: #fff;
`;

export const Unidade = styled.Text`
 font-size: 16px;
 color: #ddd;
`;

export const Row2 = styled.View`
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 padding: 16px 24px;
 
`;

export const ViewContentHeader = styled.View`
 width: 80%;
 padding: 16px 24px;
 flex-direction: row;
 justify-content: space-between;
 align-items: flex-end;
`
export const ViewContentHeaderText = styled.View`
 flex-direction: column;
 flex: 1;
 align-items: flex-start;
`;

export const BtnMais = styled.TouchableOpacity`
 width: 80px;
 height: 50px;
 background-color: #e6872ff1;
 align-items: center;
 justify-content: center;
 border-radius: 10px;
`;

export const TextBtnMais = styled.Text`
 font-size: 20px;
 font-weight: 700;
 color: #f8f8f8;
`;

export const MoreInfo = styled.View`
 flex:1;
 height: 200px;
 
 flex-direction:column;
 align-items: flex-start;
`;

export const MoreInfoTitle = styled.Text`
 font-size: 22px;
 font-weight: 700;
 padding: 8px 16px;
`;

export const TextInfo = styled.Text`
  padding: 8px 16px;
`;