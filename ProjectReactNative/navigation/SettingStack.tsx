import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Screen/DrawerScreens/SettingScreen';

const SettingStack = createStackNavigator();

function SettingStackComponent() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="TabTwoScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </SettingStack.Navigator>
  );
}

export default SettingStackComponent;