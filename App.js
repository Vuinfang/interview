import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './pages/Home/Home';
import Flag from './pages/Flags/Flag';
import Product from './pages/Products/Product';

function HomeTabScreen() {
const Tab = createBottomTabNavigator();
  return (
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
          // return <Happy size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Home} />
      {/*<Tab.Screen name="flag" component={SettingsStackScreen} />*/}
    </Tab.Navigator>

  );
}

const HomeStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer
    >
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="Home" component={HomeTabScreen} options={{
          headerShown: false
        }}/>
        <HomeStack.Screen name="Product" component={Product} />
        <HomeStack.Screen name="Flag" component={Flag} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
