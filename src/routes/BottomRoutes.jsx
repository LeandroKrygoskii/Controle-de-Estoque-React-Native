import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from '../pages/Home';

const TabRoutes = () =>{
    
    const {Screen,Navigator} = createBottomTabNavigator();

    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'#FFAC2D',
                tabBarInactiveTintColor: '#c3c3c3',

                    
                tabBarStyle:{
                    alignItems: 'center',
                    justifyContent: 'center', 
                    height: 75,
                    position: 'absolute',
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    
                    
                },
            }}
        > 

            <Screen 
                name="Home"
                component={Home}
                options={{

                    tabBarIcon:({color}) =>(
                        <AntDesign 
                        name="home" 
                        size={32} 
                        color={color} />
                    )

                }}
            />

              <Screen 
                name="Scan"
                component={Home}
                options={{

                    tabBarIcon:({color}) =>(
                        <MaterialCommunityIcons 
                        name="barcode-scan" 
                        size={32} 
                        color={color} />
                    )

                }}
            />

            <Screen 
                name="Histórico"
                component={Home}
                options={{

                    tabBarIcon:({color}) =>(
                        <AntDesign 
                        name="clockcircleo" 
                        size={32} 
                        color={color} />
                    )

                }}
            />

        </Navigator>
 
    )
}


export default TabRoutes;