import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import chewy from '../../assets/chewy.png'
import Styles from './Styles';
import Button from '../../component/Button'
import Back from '../../svg/Back';
import Share from '../../svg/Share';
import FlagIcon from '../../svg/FlagIcon';
import Snack from '../../svg/Snack';
import Smile from '../../svg/Smile';
import Donut from '../../svg/Donut';
import Panda from '../../svg/Panda';
import CheckBox from '../../svg/CheckBox';
import RightArrow from '../../svg/RightArrow';

const Product = ({ route, navigation}) => {
  if (route.params) {
    const { success } = route.params;
  }
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      height:'100%',
      width: '100%'
    }}>
      <View>
        <Text style={{
          position: 'absolute',
          top: 46,
          left: 0,
          // marginTop: 46,
          width: 350,
          height: 45,
          backgroundColor: '#A4DB2C',
          borderRadius: 3,
          zIndex: 999,
        }}>
          Flagged Item Successfully
        </Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
          height:'100%',
          width: '100%'
        }}>
        <View style={Styles.boxOne}>
          <ImageBackground
            source={chewy}
            style={Styles.image}
            resizeMode={'stretch'}
          >
            <View style={Styles.iconOne}>
             <TouchableOpacity
               style={Styles.iconBox}
               onPress={() => navigation.navigate('Home')}>
               <Back/>
             </TouchableOpacity>
             <View style={Styles.iconBoxTwo}>
               <Share/>
             </View>
            </View>
            <View style={Styles.iconTwo}>
              <TouchableOpacity
                style={Styles.iconBoxTwo}
                onPress={() => navigation.navigate('Flag')}
              >
                <FlagIcon/>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={Styles.boxTwo}>
          <View style={Styles.category}>
            <View style={Styles.smileEmj}>
              <View style={Styles.smileIcon}>
                <Smile/>
              </View>
            </View>
            <View style={Styles.cateIconBox}>
              <View style={Styles.cateIcon}>
                <Snack/>
                <Text style={Styles.wordSnack}>Snacks</Text>
              </View>
            </View>
          </View>
          <View style={Styles.name}>
            <Text style={Styles.brand}>
              Uncle Toby’s Chewy Apricot
            </Text>
            <Text style={Styles.shop}>
              Woolworths
            </Text>
          </View>
          <View style={Styles.detail}>
            <Text style={Styles.wordDetails}>
              Ingredients and Dietary Requirements
            </Text>
            <View style={Styles.rightArrow}>
              <RightArrow/>
            </View>
          </View>
          <View style={Styles.user}>
            <Text style={Styles.username}>Samantha</Text>
            <View style={Styles.space}>
              <View style={Styles.userDetail}>
                <View style={Styles.userBoxOne}>
                  <View style={Styles.moodStyle}>
                    <Donut/>
                  </View>
                  <Text style={Styles.shortName}>SL</Text>
                </View>
                <View>
                  <View style={Styles.detailRowOne}>
                    <View style={Styles.choice}>
                      <Text>Eggs</Text>
                      <CheckBox/>
                    </View>
                    <View style={Styles.choice}>
                      <Text>Dairy Free</Text>
                      <CheckBox/>
                    </View>
                  </View>
                  <View style={Styles.detailRowOne}>
                    <View style={Styles.choice}>
                      <Text>Peanuts</Text>
                      <CheckBox/>
                    </View>
                    <View style={Styles.choice}>
                      <Text>Vegan</Text>
                      <CheckBox/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={Styles.user}>
            <Text style={Styles.username}>Liam</Text>
            <View>
              <View style={Styles.userDetail}>
                <View style={Styles.userBoxTwo}>
                  <View style={Styles.moodStyle}>
                    <Panda/>
                  </View>
                  <Text style={Styles.shortName}>LJ</Text>
                </View>
                <View>
                  <View style={Styles.detailRowOne}>
                    <View style={Styles.choice}>
                      <Text>Eggs</Text>
                      <CheckBox/>
                    </View>
                    <View style={Styles.choice}>
                      <Text>Dairy Free</Text>
                      <CheckBox/>
                    </View>
                  </View>
                  <View style={Styles.detailRowOne}>
                    <View style={Styles.choice}>
                      <Text>Peanuts</Text>
                      <CheckBox/>
                    </View>
                    <View style={Styles.choice}>
                      <Text>Vegan</Text>
                      <CheckBox/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
        <View style={Styles.bottom}>
          <Button title={'Save Item'}/>
        </View>
      </View>
    </View>
  );
}
export default Product;
