import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaLogin from './src/pages/telaLogin/index.js';
import telaHome  from './src/pages/telaHome/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={telaLogin} />
        <Stack.Screen name="Itens" component={telaHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}