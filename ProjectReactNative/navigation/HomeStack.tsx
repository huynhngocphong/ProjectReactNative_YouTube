import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/DrawerScreens/HomeScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();

function CustomHeader()  {
  return (
    <SafeAreaView style={{backgroundColor: '#141414'}}>
    <View
      style={{
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Image resizeMode="contain" style={{width:100, height: 25}} source={require('../assets/images/logo.png')} />

        <View style={{flexDirection: 'row', width: 150,  justifyContent: 'space-between'}}>
          <Feather name="cast" size={28} color="white" />
          <AntDesign name="bells" size={28} color="white" />
          <AntDesign name="search1" size={28} color="white" />
          <FontAwesome name="user-circle-o" size={28} color="white" />
        </View>
    </View>
  </SafeAreaView>
  );
};

function HomeStackComponent() {
  return (
    <HomeStack.Navigator 
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <HomeStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;