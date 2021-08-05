import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../component/Button';
import Styles from './Styles';
import Back from '../../svg/Back';

const Flag = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFA92C',
    }}>
      <View style={Styles.box}>
        <View style={Styles.header}>
          <TouchableOpacity
            // style={styles.iconBoxTwo}
            onPress={() => navigation.navigate('Product')}
          >
            <View style={Styles.backButton}>
              <Back/>
            </View>
          </TouchableOpacity>
          <Text style={Styles.title}>
            Flag Item
          </Text>
        </View>
        <View style={Styles.boxOne}>
          <Text style={Styles.detail}>
            If you think an existing Nutrezi item is inaccurate,
            you can flag an item and provide details.
          </Text>
        </View>
        <View style={Styles.boxTwo}>
          <Text style={Styles.label}>
            Item Name
          </Text>
          <Text style={Styles.product}>
            Uncle Toby’s Chewy Apricot
          </Text>
          <View style={Styles.hLine}></View>
        </View>
        <View style={Styles.boxThree}>
          <Text style={Styles.label}>
            Details
          </Text>
          <Text style={Styles.detail}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet
          </Text>
          <View style={Styles.hLine}></View>
        </View>
        {/*<View style={Styles.space}></View>*/}
        <View style={Styles.bottom}>
          <Button
            title={'Flag'}
            onPress={() => navigation.navigate('Product', {success: true})}
          />
        </View>
      </View>
    </View>
  );
}
export default Flag;
