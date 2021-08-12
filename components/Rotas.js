import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Cappuccinos from './Cappuccino';
import Frappe from './Frappe';
import Doce from './Doce';
import Sanduiches from './Sanduiches';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Café" component={Cappuccinos} />
        <Stack.Screen name="Frappe" component={Frappe} options={{title:'Frappuccinos'}}/>
        <Stack.Screen name="Doces" component={Doce} /> 
        <Stack.Screen name="Sanduiches" component={Sanduiches} options={{title:'Sanduíches'}} />               
      </Stack.Navigator>
    </NavigationContainer>
  );
}