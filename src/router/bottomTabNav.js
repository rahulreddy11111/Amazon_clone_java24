import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'profile') {
            iconName = 'user';
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'shoppingCart') {
            iconName = 'shopping-cart';
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'more') {
            iconName = 'menu';
            return <Entypo name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#f15454',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      })}
    >
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen name="profile" component={HomeScreen} />
      <Tab.Screen name="shoppingCart" component={ShoppingCartStack} />
      <Tab.Screen name="more" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
