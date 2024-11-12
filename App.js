import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen';
import QRCodeScanner from './src/screens/QRCodeScanner';
import CardScreen from './src/screens/CardScreen';
import QRScanner from './src/screens/QRScanner';
import { AccessibilityProvider } from './src/context/AccessibilityContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AccessibilityProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="QRCode" component={QRCodeScanner} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen name="QRScanner" component={QRScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccessibilityProvider>
  );
}

