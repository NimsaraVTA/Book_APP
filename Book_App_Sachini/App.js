// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigningScreen from './app/src/views/screens/SigningScreen';
import SignupScreen from './app/src/views/screens/SignupScreen';
import Cat from './app/src/views/screens/Category';
import DetailsScreen from './app/src/views/screens/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () =>null}}>
        <Stack.Screen name='SignIn' component={SigningScreen} />
        <Stack.Screen name='SignUp' component={SignupScreen} />
        <Stack.Screen name='Cate' component={Cat} />
        <Stack.Screen name='Detail' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
