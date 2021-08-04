import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const Button = (props) => {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    ><View>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </View>
    </TouchableOpacity>
  )}
const styles = StyleSheet.create({
  button: {
    marginTop:20,
    marginLeft:19.5,
    width:336,
    height:45,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius:5,
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height:5},
    shadowRadius: 12,
    shadowOpacity: 1,
    shadowColor: '#00000029',
    shadowBlur: 15,
  },
  title: {
    fontSize:16,
    fontWeight:'700',
    color:'#FFA92C',
    includeFontPadding: false,
    textAlign:'center',
    textAlignVertical: 'center',
  }
})
export default Button;
