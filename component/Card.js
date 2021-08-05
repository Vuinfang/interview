import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const Card = (props) => {
  return(
    <View style={Styles.card}>
      <View style={Styles.name}>
        <Text style={{
          whiteSpace:'nowrap',
          textOverflow:'ellipsis',
          overflow:'hidden',
          color: '#FFA92C',
          lineHeight:40}}
        >
          {props.title}
        </Text>
      </View>
      <Image
        source={props.image}
        style={Styles.picture}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  card: {
    marginTop: 5,
    marginLeft: 19,
    width: 155,
    height: 165,
    backgroundColor: '#0000001A',
    borderRadius: 5,
    overflow: 'hidden',
    shadowOffset: {width: 0, height:-5},
    shadowRadius: 4,
    shadowOpacity: 0.23,
    shadowColor: '#0000001A',

  },
  name: {
    width: 155,
    height: 40,
    backgroundColor: '#FFEED5',
    paddingLeft: 15,
    paddingRight: 15,
  },
  picture: {
    width: 155,
    height: 125,
    backgroundColor: 'pink',
  }
})

export default Card;
