import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CadProduto from '../pages/CadProduto';
import Consulta from '../pages/Consulta';
import CadCategoria from '../pages/CadCategoria';
import Chart from '../pages/Charts';
import EstoqueBaixo from '../pages/EstoqueBaixo';
import ProductDetail from '../pages/ProductDetail';
import UpdateProduto from '../pages/UpdateProd';
import Home from '../pages/Home';

import { Entypo } from '@expo/vector-icons';
import NewQuantidade from '../pages/NewQuantidade';
import Relatorio from '../pages/Relatorio';
import Entrada from '../pages/Entrada';

const myOptions = {
  title: "Detalhes", 
  headerTintColor:'#eeeeee',
  headerRight:() => (<Entypo name="menu" size={24} color="#ffcc00" />), 
  headerTitleAlign:'center' ,
  headerStyle:{
    backgroundColor:'#1a1a1a'
  }
}

const Routes = () => {

    const {Screen,Navigator} = createStackNavigator();

    return(

        <NavigationContainer>

            <Navigator initialRouteName="HomeScreen">

                    <Screen 
                      options={{headerShown: false}}
                      name="HomeScreen"
                      component={Home}
                    />

                    <Screen                     
                      name="Cadastro de Produto"
                      component={CadProduto}
                      options={{headerShown: false}} 
                    />


                    <Screen                      
                      name="Consulta"
                      component={Consulta}
                      options={{headerShown: false}}
                    />



                    <Screen                      
                      name="Nova Categoria"
                      component={CadCategoria}
                      options={{headerShown: false}}
                    />  

                     <Screen                      
                      name="Chart"
                      component={Chart}
                      options={{headerShown: false}}
                    /> 

                    <Screen                      
                      name="Estoque Baixo"
                      component={EstoqueBaixo}
                      options={{headerShown:false}}  
                    />

                    <Screen                      
                      name="Detalhes do Produto"
                      component={ProductDetail}
                      options={{headerShown:false}}                  
                    />

                    <Screen                      
                      name="Entrada Estoque"
                      component={Entrada}
                      options={{headerShown:false}}                    
                    />

                    <Screen                      
                      name="Nova quantidade"
                      component={NewQuantidade}
                      options={{headerShown:false}}                   
                    />
                      <Screen                      
                      name="Atualizar produto"
                      component={UpdateProduto}
                      options={{headerShown:false}}                   
                    />

                    <Screen                      
                      name="Relatorio"
                      component={Relatorio}
                      options={{headerShown:false}}                  
                    />

            </Navigator>

        </NavigationContainer>

    )
   

}

export default Routes;