import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './pages/Home/Home';
import Product from './pages/Product';
import Flag from './pages/Flag';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Product" component={Product} />
    </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <SettingsStack.Screen name="Flag" component={Flag} />
      <SettingsStack.Screen name="Product" component={Product} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Product') {
              iconName = focused
                ? 'ios-list-box'
                : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Product" component={SettingsStackScreen} />
        <Tab.Screen name="flag" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
