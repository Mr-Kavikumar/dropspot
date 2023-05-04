import React from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen }from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='dropspot' component={HomeScreen} />
</Stack.Navigator>
<StatusBar style='auto' /> 
</NavigationContainer>
    

);
}

export default App