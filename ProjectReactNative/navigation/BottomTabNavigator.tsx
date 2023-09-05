import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStack';
import SettingsScreen from '../Screen/DrawerScreens/SettingScreen';
import SettingStackComponent from './SettingStack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

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
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={SettingStackComponent}
                options={{
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="compass-outline" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="New"
                component={SettingStackComponent}
                options={{
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="pluscircleo" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Subscriptions"
                component={SettingStackComponent}
                options={{
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="subscriptions" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Library"
                component={SettingStackComponent}
                options={{
                    tabBarActiveTintColor: 'white',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="video-collection" size={24} color={color} />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;