import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import home from './src/pages/home/home'
import quiz1 from './src/pages/quiz/quiz1'
import quiz2 from './src/pages/quiz/quiz2'
import quiz3 from './src/pages/quiz/quiz3'
import quiz4 from './src/pages/quiz/quiz4'
import quiz5 from './src/pages/quiz/quiz5'
import resultado from './src/pages/resultado/index'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="quiz1" component={quiz1} />
        <Stack.Screen name="quiz2" component={quiz2} />
        <Stack.Screen name="quiz3" component={quiz3} />
        <Stack.Screen name="quiz4" component={quiz4} />
        <Stack.Screen name="quiz5" component={quiz5} />
        <Stack.Screen name="resultado" component={resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 