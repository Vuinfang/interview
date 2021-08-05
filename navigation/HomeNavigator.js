import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home/Home';
import Flag from '../pages/Flags/Flag';
import Product from '../pages/Products/Product';
import TabBar from '../component/TabBar';


function HomeTabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      //   ({ route }) => ({
      //   headerShown: false,
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Product') {
      //       iconName = focused
      //         ? 'ios-list-box'
      //         : 'ios-list';
      //     }
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //     // return <Happy size={size} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: '#FFA92C',
      //   inactiveTintColor: 'gray',
      // }}
      // tabBarOptions={{
      //   activeTintColor: '#FFA92C',
      //   inactiveTintColor: '#CDCDCD',
      //   showLabel: false,
      //   showIcon: true,
      //   iconStyle: {backgroundColor: '#ccc' },
      //   style: {
      //     position: 'absolute',
      //     bottom: 25,
      //     left: 20,
      //     right: 20,
      //     elevation: 0,
      //     backgroundColor: '#ccc',
      //     borderRadius: 15,
      //     height: 90,
      //   },
      // }}
      tabBar={(props) => <TabBar {...props}/>}
    >
      <Tab.Screen name="Home" component={Home} initialParams={{ icon: 'home' }}/>
      <Tab.Screen name="Scan" component={Home} initialParams={{ icon: 'scan' }}/>
      <Tab.Screen name="setting" component={Home} initialParams={{ icon: 'setting' }}/>
    </Tab.Navigator>

  );
}

const HomeStack = createStackNavigator();
export default function HomeNavigator() {
  return (    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={HomeTabScreen} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Product" component={Product} />
      <HomeStack.Screen name="Flag" component={Flag} />
    </HomeStack.Navigator>
  );
}
