import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigator';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
    );
  }
}
