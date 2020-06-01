/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Wakeup from '../screens/Wakeup';
import BedTime from '../screens/BedTime';
import SleepEnchancer from '../screens/SleepEnchancer';
import Schedule from '../screens/Schedule';
const Tab = createBottomTabNavigator();
export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Wakeup') {
                iconName = focused ? 'ios-sunny' : 'ios-sunny';
              } else if (route.name === 'Bed Time') {
                iconName = focused ? 'ios-moon' : 'ios-moon';
              } else if (route.name === 'Enchancer') {
                iconName = focused ? 'ios-bed' : 'ios-bed';
              } else if (route.name === 'Schedule') {
                iconName = focused ? 'ios-clock' : 'ios-clock';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#f5d142',
            inactiveTintColor: 'white',
            style: {
              borderTopWidth: 0,
              backgroundColor: 'rgba(20, 54, 24,0.6)',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              position: 'absolute',
              paddingBottom: 5,
              height: 60,
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Wakeup" component={Wakeup} />
          <Tab.Screen name="Bed Time" component={BedTime} />
          <Tab.Screen name="Enchancer" component={SleepEnchancer} />
          <Tab.Screen name="Schedule" component={Schedule} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
