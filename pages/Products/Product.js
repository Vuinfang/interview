import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import chewy from '../../assets/chewy.png'
import styles from './styles';
import Button from '../../component/Button'
import Back from '../../assets/Back Button.svg';
import Share from '../../assets/Share Icon.svg';
import FlagIcon from '../../assets/Flag Icon.svg';
import Snack from '../../assets/Snacks Icon.svg';
import Smile from '../../assets/HappyEmoji.svg';
import Donut from '../../assets/Donut Emoji.svg';
import Panda from '../../assets/Panda Emoji.svg';
import RightArrow from '../../assets/Right Arrow.svg';
import CheckBox from '../../assets/Allergy Tick.svg';

const Product = ({ navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.boxOne}>
        <ImageBackground
          source={chewy}
          style={styles.image}
          resizeMode={'stretch'}
        >
          <View style={styles.iconOne}>
           <TouchableOpacity
             style={styles.iconBox}
             onPress={() => navigation.navigate('Home')}>
             <Back/>
           </TouchableOpacity>
           <View style={styles.iconBoxTwo}>
             <Share/>
           </View>
          </View>
          <View style={styles.iconTwo}>
            <TouchableOpacity
              style={styles.iconBoxTwo}
              onPress={() => navigation.navigate('Flag')}
            >
              <FlagIcon/>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <View style={styles.smileEmj}>
              <View style={styles.smileIcon}>
                <Smile/>
              </View>
            </View>
            <View style={styles.cateIconBox}>
              <View style={styles.cateIcon}>
                  <Snack/>
                  <Text style={styles.wordSnack}>Snacks</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.name}>
        <Text style={styles.brand}>
          Uncle Toby’s Chewy Apricot
        </Text>
        <Text style={styles.shop}>
          Woolworths
        </Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.wordDetails}>
          Ingredients and Dietary Requirements
        </Text>
        <View style={styles.rightArrow}>
          <RightArrow/>
        </View>
      </View>
      <View style={styles.user}>
        <Text style={styles.username}>Samantha</Text>
      </View>
      <View style={styles.space}>
        <View style={styles.userDetail}>
          <View style={styles.userBoxOne}>
            <View style={styles.moodStyle}>
              <Donut/>
            </View>
            <Text style={styles.shortName}>SL</Text>
          </View>
          <View>
            <View style={styles.detailRowOne}>
                <View style={styles.choice}>
                  <Text>Eggs</Text>
                  <CheckBox/>
                </View>
                <View style={styles.choice}>
                  <Text>Dairy Free</Text>
                  <CheckBox/>
                </View>
            </View>
            <View style={styles.detailRowOne}>
                <View style={styles.choice}>
                  <Text>Peanuts</Text>
                  <CheckBox/>
                </View>
                <View style={styles.choice}>
                  <Text>Vegan</Text>
                  <CheckBox/>
                </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.user}>
        <Text style={styles.username}>Liam</Text>
      </View>
      <View style={styles.space}>
        <View style={styles.userDetail}>
          <View style={styles.userBoxTwo}>
            <View style={styles.moodStyle}>
              <Panda/>
            </View>
            <Text style={styles.shortName}>LJ</Text>
          </View>
          <View>
            <View style={styles.detailRowOne}>
              <View style={styles.choice}>
                <Text>Eggs</Text>
                <CheckBox/>
              </View>
              <View style={styles.choice}>
                <Text>Dairy Free</Text>
                <CheckBox/>
              </View>
            </View>
            <View style={styles.detailRowOne}>
              <View style={styles.choice}>
                <Text>Peanuts</Text>
                <CheckBox/>
              </View>
              <View style={styles.choice}>
                <Text>Vegan</Text>
                <CheckBox/>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button title={'Save Item'}/>
      </View>
    </View>
  );
}
export default Product;
