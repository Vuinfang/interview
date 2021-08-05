import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Scan from '../svg/Scan';

const Tab = ({ color, tab, onPress, icon }) => {
  if (icon !== 'scan') {
    let finalStyle = color === '#FFA92C' ? [styles.container, styles.selectedStyle] : [styles.container]
    return(
      <TouchableOpacity style={finalStyle} onPress={onPress}>
        {icon && <AntDesign name={icon} size={25} color={color} />}
      </TouchableOpacity>
    )} else {
    return (
      <TouchableOpacity style={styles.containerMid} onPress={onPress}>
        <View style={styles.scanStyle}>
          {icon && <Scan/>}
        </View>
      </TouchableOpacity>
      )
  }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  selectedStyle: {
    borderWidth: 4,
    borderTopColor: '#FFA92C',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
  },
  scanStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    padding: 5,
    borderRadius: 28,
    width: 56,
    height: 56,
    backgroundColor: '#FFA92c',
  },
  containerMid: {
    marginTop: -35,
    alignItems: 'center',
    borderRadius: 35,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    // shadowOffset: {width: 0, height:-5},
    // shadowRadius: 12,
    shadowOpacity: 1,
    // shadowColor: '#0000001A',
    boxShadow: '0 -4px 4px 0 #0000001A',
    // WebkitBoxShadow: '4px 0 1px 4px #0000001A',
  }
});

export default Tab;
