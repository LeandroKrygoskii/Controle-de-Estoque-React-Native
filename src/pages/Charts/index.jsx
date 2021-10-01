import React, {useState, useEffect , useRef} from 'react';
import {
    Container ,
    Btn ,
    TxtBtn
} from './styles';
import { BarChart , PieChart } from 'react-native-chart-kit';
import Produtos from '../../services/Sqlite/CadastroProduto';
import Categorias from '../../services/Sqlite/Categoria';
import {Dimensions, View , ActivityIndicator} from 'react-native';
import * as scale from 'd3-scale'


export default function Chart(){

    useEffect(() => {
        //getProducts();
        getCategorias();
    },[])

    useEffect(() => {
        const res = newObject(data);
        //
        setTest(res);
        //console.log(test)      
    },[data])
    //console.log( "Eeeeeee" + test)
    
    const dataRef = useRef([]);
    useEffect(() => {
        //getProducts();
        
    },[test])
     
    const initialState = {
        
            name: "",
            quantidade: "",
            color: "#f2f",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        
    }
    const [data, setData] = useState([]);
    const [test, setTest] = useState([]);
    const [time, setTime] = useState(false);
 
  

    async function getCategorias(){
        const response = await Produtos.selectQuantityPerCategory();
        //console.log(response);
        setData(response);
    }
    
    const chartConfig = {
        backgroundGradientFrom: "#b2ca13",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgb(137, 87, 191, ${opacity})`,
        useShadowColorFromDataset: false // optional
    };
     
    
    
      //console.log(test);
    //console.log(data);


      function newObject(arr){
          return arr.map(obj => {
              return {
                  name: obj.nome,
                  quantidade: obj.quantidade,
                  color: obj.barColor,
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15
              }
          })
      }

       const RenderChart = () =>{
           return(
            <PieChart
                data={test}
                width={Dimensions.get('window').width}
                height={300}
                chartConfig={chartConfig}
                accessor={"quantidade"}
                
                paddingLeft={"25"}
                
                absolute
            />  
           )
       }

    return(
       <Container>

           {
               test.length !== 0 ? 
               RenderChart() :
               <TxtBtn>Carregando...</TxtBtn>
           }
            
               
           <Btn onPress={() => setTime(true)}>
               <TxtBtn>
                 Produtos por Cat
               </TxtBtn>
           </Btn>
       </Container>    
    )
}