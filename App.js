import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tables from './src/services/Sqlite/CreateTables';

import Routes from './src/routes';

export default function App() {
 
   useEffect( () => {
     const CreateTables = () => {
       try {
         Tables.createTables();
       } catch (error) {
         console.log(error)
       }
     }

     CreateTables();
   },[])

  return (
    <> 
       <StatusBar style='light' backgroundColor="#0e9e6e"/>
      
       <Routes/>
    </>
  );
}

