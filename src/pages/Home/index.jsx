import React from 'react';
import {Container, CardArea} from './style';

import CardHome from '../../components/CardHome';
import {useNavigation} from '@react-navigation/native';



export default function Home(){


  

  const navigation = useNavigation();

    return(
      <Container>
        <CardArea>
            <CardHome
              title="Cadastro"
              icon="box"
              iconColor='#2aa919'
              onPress={() => navigation.navigate("Cadastro de Produto")}
            />

            <CardHome
                title="Consulta"
                icon ="list"
                iconColor='#005fed'
                onPress={ () => navigation.navigate("Consulta")}
            />
        </CardArea>

        <CardArea>
            <CardHome
              title="Movimentação"
              icon="database"
              iconColor='#0c1b54'
              onPress={() => navigation.navigate("Entrada Estoque")}
            />

            <CardHome
                title="Relatório"
                icon="activity"
                iconColor='#ff9f22'
                onPress={() => navigation.navigate("Relatorio")}
            />
        </CardArea>

        <CardArea>
            <CardHome
              title="Gráficos"
              icon="pie-chart"
              iconColor='#118d8b'
              onPress={() => navigation.navigate("Chart")}
            />

            <CardHome
                title="Estoque Baixo"
                icon="alert-triangle"
                iconColor='#ff2222'
                onPress={() => navigation.navigate("Estoque Baixo")}
            />
        </CardArea>
         

      </Container>
    )
}