import styled from 'styled-components/native';

export const Container = styled.View`
 
 flex:1;


`;

export const Header = styled.View`
 width: 100%;
 background-color: #333232;
 height: 55%;
 border-bottom-left-radius: 20px;
 border-bottom-right-radius: 20px;
 align-items:center;

`;

export const Content = styled.View`

 flex:1;
 width: 85%;
 flex-direction: column;

`;

export const Title = styled.Text`
 font-size: 22px;
 font-weight: bold;
 margin-top: 10px;
 color: #ffcc00;
`;

export const ViewImgProduct = styled.View`
 align-items: center;
 flex:1;
 margin-top: 8px;

`;

export const ImgProduct = styled.Image`
 width: 100%;
 height: 150px;
 width: 150px;
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

`;

export const SubTitle = styled.Text`
 margin-bottom: 10px;
 font-size: 16px;
 justify-content: flex-end;
 color: #ffcc00;
  text-align: right;
`;

export const TitleDesc = styled.Text`
  color: #ffcc00;
  font-size: 16px;
`;

export const Strong = styled.Text`
 font-size: 16px;
 font-weight: 700;
`;

export const Strong2 = styled.Text`
 font-size: 16px;
 font-weight: 700;
 color: #ffff;
`;

export const ViewDesc = styled.View`
 padding: 10px;
 flex-direction: column;
`;

export const TextDesc = styled.Text`
  color: #f2f2f2;
`;

export const ViewMain = styled.ScrollView`
 background-color: #ffffff;
 flex:1;
 width: 100%;
 flex-direction: column;

`;

export const TextEstoque = styled.Text`
 font-size: 16px;
 font-weight: 600;
`;

export const NumberEstoque = styled.Text`
 font-size: 18px;
 margin-top: 4px;
 
`;

export const CardEstoque = styled.View` 
 width: 90%;
 border-bottom-width: 1px;
 border-color: #c3c3c3;
 
 height: 90px;
 padding: 10px;
 text-align: center;
 margin-top: 12px;
 flex-direction: row;

 border-radius: 20px;
 align-items: center;
 justify-content: space-around;
`;


export const Btn = styled.TouchableOpacity`
 width: 70%;
 background-color: seagreen;
`;

export const ViewAlignCenter = styled.View`
 align-items: center;
 justify-content: center;
`;

export const Circle = styled.View`
 padding: 20px;
 border-radius: 50px;
 background-color: #ffcc00
`;
