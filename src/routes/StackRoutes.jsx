import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './BottomRoutes';
import CadProduto from '../pages/CadProduto';
import Consulta from '../pages/Consulta';
import Movimentacao from '../pages/Movimentacao';
import Entrada from '../pages/Entrada';
import  Saida  from '../pages/Saida';
import CadCategoria from '../pages/CadCategoria';
import Clientes from '../pages/Clientes';
import EstoqueBaixo from '../pages/EstoqueBaixo';
import ProductDetail from '../pages/ProductDetail';

import { Entypo } from '@expo/vector-icons';
import NewQuantidade from '../pages/NewQuantidade';
import Relatorio from '../pages/Relatorio';

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
                      component={TabRoutes}
                    />

                    <Screen                     
                      name="Cadastro de Produto"
                      component={CadProduto}
                      options={{...myOptions,title: "Novo Produto"}} 
                    />


                    <Screen                      
                      name="Consulta"
                      component={Consulta}
                      options={{...myOptions,title: "Consultar"}} 
                    />

                    <Screen                      
                      name="Movimentacao"
                      component={Movimentacao}
                      options={{...myOptions,title: "Movimentação"}} 
                    />

                    <Screen                      
                      name="Entrada"
                      component={Entrada}
                      options={{...myOptions,title: "Entrada"}} 
                    />

                    <Screen                      
                      name="Saida"
                      component={Saida}
                      options={{...myOptions,title: "Saída"}} 
                    /> 

                    <Screen                      
                      name="Nova Categoria"
                      component={CadCategoria}
                      options={{...myOptions,title: "Nova Categoria"}} 
                    />  

                     <Screen                      
                      name="Chart"
                      component={Clientes}
                      options={{...myOptions,title: "Gráficos"}} 
                    /> 

                    <Screen                      
                      name="Estoque Baixo"
                      component={EstoqueBaixo}
                      options={{...myOptions,title: "Baixo"}} 
                    />

                    <Screen                      
                      name="Detalhes do Produto"
                      component={ProductDetail}
                      options={{...myOptions,title: "Detalhess"}}                  
                    />

                    <Screen                      
                      name="Entrada estoque"
                      component={NewQuantidade}
                      options={{...myOptions,title: "Entrada no estoque"}}                  
                    />

                    <Screen                      
                      name="Relatorio"
                      component={Relatorio}
                      options={{...myOptions,title: "Relatório"}}                  
                    />

            </Navigator>

        </NavigationContainer>

    )
   

}

export default Routes;