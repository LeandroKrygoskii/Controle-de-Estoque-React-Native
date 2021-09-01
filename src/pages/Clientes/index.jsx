import React, {useState, useEffect} from 'react';
import {Container } from './styles';
import { PieChart,BarChart, Grid, YAxis } from 'react-native-svg-charts';
import Produtos from '../../services/Sqlite/CadastroProduto';
import {Text} from 'react-native-svg';
import {Dimensions, View} from 'react-native';
import * as scale from 'd3-scale'

export default function Chart(){

    useEffect(() => {
        getProducts();
    },[])

    //  useEffect(() => {
       
              
    //  },[data])

    const [data, setData] = useState([]);
    const [estoque, setEstoque] = useState([]);
    const [name, setName] = useState([]);
    

  

    async function getProducts(){       
        const response = await Produtos.selectAllQuantity();
            
            setData(response);
           
    }
    console.log( "data" +data)
    
    // console.log("data :" + data)
     function map() {
       data.map((item) => {  
            var estoque_new = [item.quantidade]         
            setEstoque(...estoque_new);
            //setName(item.nome);
        }) 
        console.log(estoque +"Estoque")
    }
    

    const Label = ({slices}) =>{
     return slices.map((slice, index) =>{
         const {pieCentroid, data} = slice;

         return(
            <Text
             key={`label-${index}`}
             x={pieCentroid[0]}
             y={pieCentroid[1]}
             fill="black"
             textAnchor={'middle'}
             alignmentBaseline={'middle'}
             fontSize={22}
            >
              {data.value}
              
            </Text>
         )
     })
    }

    
    
    const ChartRender= () => {

         const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
       
            
         //console.log(estoque + "-----")
            const pieData = data.map((value, index) => ({               
              value: value.quantidade,
              key: `${index} - ${value}`,              
              svg:{
                fill: randomColor(),
                onPress: () => alert(`produto ${value.nome} , quantidade ${value.quantidade}`, value.nome),                    
              }
            }));

            return(
                <PieChart 
                    style={{height:300}}
                    data={pieData}
                    width={Dimensions.get('window').width}               
                >
                  <Label/>
                </PieChart>
            )
    }

  
  
    const BarChartRender = () => {


        return(
            <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'center', height: 300 }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].nome}
                   
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={data}
                    width={Dimensions.get('window').width}    
                    horizontal={true}
                    yAccessor={({ item }) => item.quantidade}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
            </View>
        )
    }
    
    return(
       <Container>    
        {ChartRender()}
       </Container>    
    )
}