import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import telaRestaurante from './src/pages/telaRestaurante/index.js';
import telaInfo from './src/pages/telaInfo/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurantes" component={telaRestaurante} />
        <Stack.Screen name="Lista de restaurantes"  component={telaInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}