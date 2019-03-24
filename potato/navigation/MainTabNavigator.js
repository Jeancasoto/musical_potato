import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListarAtractivos from '../screens/ListarAtractivos';

// Home
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// Atractivos
const AtractivosStack = createStackNavigator({
  Atractivos: ListarAtractivos,
});

AtractivosStack.navigationOptions = {
  tabBarLabel: 'Atractivos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-link${focused ? '' : '-outline'}`
        : 'md-star'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AtractivosStack,
});
