import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../component/Card';
import chewy from '../../assets/chewy.png';
// import CatEmoji from '../../assets/cat_emoji.svg';
// import Filter from '../../assets/Filter Icon.svg'
import Styles from './Styles';
// import DownArrow from '../../assets/Down Arrow.svg';
import Test from '../../test/Test';
const Home = ({ navigation}) => {
    return (
      <View style={{ flex: 1 }}>
          <View style={Styles.top}>
            <View style={Styles.item}>
              <View style={Styles.username}>
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
              <View style={Styles.mood}>
                {/*<CatEmoji width={20} height={'100%'}/>*/}
                <Test width={20} height={'100%'}/>
                <Text style={Styles.picker}>SJ</Text>
                <View style={Styles.arrow}>
                  {/*<DownArrow/>*/}
                  <Test/>
                </View>
              </View>
            </View>
          </View>
        <View style={Styles.userItem}>
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
          {/*<Filter/>*/}
          <Test/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Card
            // image={'../assets/chewy.png'}
            image={chewy}
            title={'Uncle Toby\'s Chewy Apricot'}
          />
        </TouchableOpacity>
      </View>
    );
}

export default Home;
