import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Card from '../../component/Card';
import chewy from '../../assets/chewy.png';
import CatEmoji from '../../assets/cat_emoji.svg';
import Filter from '../../assets/Filter Icon.svg'
import styles from './styles';
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
                <Text style={{
                  fontSize:'20px',
                  color: '#fff',
                  fontStyle: 'Montserrat',
                  fontWeight: '350'
                }}>
                  Samantha!
                </Text>
              </View>
              <View style={styles.mood}>
                <CatEmoji width={20} height={'100%'}/>
                <Text style={styles.picker}>SJ</Text>
                <Text>    V</Text>
              </View>
            </View>
          </View>
        <View style={styles.userItem}>
          <View>
            <Text style={{
              fontSize:16,
              color: 'black',
              fontStyle: 'Montserrat',
              fontWeight:'400'
            }}>
              Samantha's Items
              <Text style={{
                color: '#FFA92C'
              }}> 1</Text>
            </Text>

          </View>
          <Filter/>
        </View>
        <View>
          <Card
            // image={'../assets/chewy.png'}
            image={chewy}
            title={'Uncle Toby\'s Chewy Apricot'}
          />
        </View>
      </View>
    );
}

export default Home;
