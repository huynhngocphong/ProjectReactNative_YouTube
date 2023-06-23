import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStack';
import SettingsScreen from '../Screen/DrawerScreens/SettingScreen';
import SettingStackComponent from './SettingStack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
            }}
            >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarActiveTintColor: 'white',
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingStackComponent} 
                options={{
                    tabBarActiveTintColor: 'white',
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;