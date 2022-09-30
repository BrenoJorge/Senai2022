import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import compromisso from './src/pages/telaCompromisso/index.js';
import descricao from './src/pages/telaDescricao/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromissos" component={compromisso} />
        <Stack.Screen name="Descricao" component={descricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}