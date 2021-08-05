import React, {useEffect} from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Animated, Dimensions} from 'react-native';
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

const Product = ({route, navigation}) => {
  const width = Dimensions.get('window').width;
  let flag = false;
  if (route.params) {
    flag = route.params.success;
  }
  const initHeight = new Animated.Value(-45)
  useEffect(() => {
    if (flag) {
      Animated.timing(initHeight, {
        toValue: 46,
        duration: 1000,
      }).start();
      setTimeout(() =>
          Animated.timing(initHeight, {
            toValue: -46,
            duration: 1000,
          }).start()
        , 2000);
    }
  });
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    }}>
      <Animated.View style={{
        flexDirection:'row',
        alignItems: 'center',
        position: 'absolute',
        top: initHeight,
        right: (width - 350) / 2,
        // marginTop: 46,
        width: 350,
        height: 45,
        backgroundColor: '#A4DB2C',
        borderRadius: 10,
        zIndex: 999,
      }}><Text style={{
        marginLeft: 60,
        lineHeight: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#fff',
        borderRadius: 15,
      }}>
        Flagged Item Successfully
      </Text>
        <CheckBox />
      </Animated.View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        zIndex: -1
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
