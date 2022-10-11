import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaHome from './src/pages/telaHome/index';
import telaCarrinho  from './src/pages/telaCarrinho/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={telaHome} />
        <Stack.Screen name="Carrinho" component={telaCarrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}