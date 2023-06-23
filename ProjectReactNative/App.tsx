import React from 'react';

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigatorRoutes from './Screen/DrawerNavigationRoutes';
import BottomTabs from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();

const Auth = () => {

  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{
        title: 'Register',
        headerStyle: {
          backgroundColor: '#307ecc'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Auth' component={Auth} options={{ headerShown: false }} />
        {/* <Stack.Screen name='DrawerNavigationRoutes' component={DrawerNavigatorRoutes} options={{ headerShown: false }} /> */}
        <Stack.Screen name='BottomTabs' component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
