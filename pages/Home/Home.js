import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../component/Card';
import chewy from '../../assets/chewy.png';
import Styles from './Styles';
import Cat from '../../svg/Cat';
import Down from '../../svg/Down';
import FilterNew from '../../svg/FilterNew';

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
                <Cat width={20} height={'100%'}/>
                <Text style={Styles.picker}>SJ</Text>
                <View style={Styles.arrow}>
                  <Down/>
                  {/*<FilterNew/>*/}
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
          <FilterNew/>
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
