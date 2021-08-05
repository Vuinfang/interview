import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Flag from '../pages/Flags/Flag';
import Product from '../pages/Products/Product';
import TabBar from '../component/TabBar';


function HomeTabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={(props) => <TabBar {...props}/>}
    >
      <Tab.Screen name="Home" component={Home} initialParams={{icon: 'home'}}/>
      <Tab.Screen name="Scan" component={Home} initialParams={{icon: 'scan'}}/>
      <Tab.Screen name="setting" component={Home} initialParams={{icon: 'setting'}}/>
    </Tab.Navigator>

  );
}

const HomeStack = createStackNavigator();
export default function HomeNavigator() {
  return (<HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={HomeTabScreen} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Product" component={Product}/>
      <HomeStack.Screen name="Flag" component={Flag}/>
    </HomeStack.Navigator>
  );
}
