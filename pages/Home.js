import React from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Card from '../component/Card';
const Home = ({ navigation}) => {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.top}>
            <View style={styles.item}>
              <View style={styles.username}>
                <Text style={{
                  fontSize:'20px',
                  color: '#fff',
                  fontStyle: 'Montserrat',
                  fontWeight: '400'
                }}>
                  Good Afternoon
                </Text>
                <Text style={{fontSize:'20px',
                  color: '#fff',
                  fontStyle: 'Montserrat',
                  fontWeight: '350'
                }}>
                  Samantha!
                </Text>
              </View>
              <View style={styles.mood}>
                <Text style={styles.picker}>MJ</Text>
              </View>
            </View>

          </View>
        <View style={styles.userItem}>
          <View>
            <Text style={{fontSize:16,
              color: 'black',
              fontStyle: 'Montserrat',
              fontWeight:'600'
            }}>
              Samantha's Items
              <Text style={{
                fontSize: 16,
                color: '#FFA92C'
              }}> 1</Text>
            </Text>

          </View>
          <View>Icon</View>
        </View>
        <View>
          <Card/>
        </View>


      </View>
    );
}
const styles = StyleSheet.create({
  // -------------header...---------------
    top: {
      width: '100%',
      height: 142,
      backgroundColor: '#FFA92C',
      color: '#fff'
    },
  item: {
    flexDirection: 'row',
    marginTop: 67.38,
  },
  username: {
      width: 204,
      height: 48,
      marginLeft: 19.5,
  },
  mood: {
      width: 150.5,
  },
  picker: {
      marginTop: 9,
      width: 99,
      height: 34,
      borderRadius: '10px',
      backgroundColor: '#fff'
  },
  // ------------------body...------------------
  userItem: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 25,
    marginLeft: 19.5,
    marginRight: 19.5,
  }
})
export default Home;
