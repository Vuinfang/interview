import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? 'red' : 'black');

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      {routes.map((route, index) => (
        <Tab
          tab={route}
          icon={route.params.icon}
          onPress={() => handlePress(route.name, index)}
          color={renderColor(route.name)}
          key={route.key}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
