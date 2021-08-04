import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../component/Button';
import styles from './styles';
import Back from '../../assets/Back Button.svg';
import FlagIcon from '../../assets/Flag Icon.svg';
const Flag = ({ navigation}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFA92C',
    }}>
      <View style={styles.header}>
        <TouchableOpacity
          // style={styles.iconBoxTwo}
          onPress={() => navigation.navigate('Product')}
        >
          <View style={styles.backButton}>
            <Back />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>
          Flag Item
        </Text>
      </View>
      <View style={styles.boxOne}>
        <Text style={styles.detail}>
          If you think an existing Nutrezi item is inaccurate,
          you can flag an item and provide details.
        </Text>
      </View>
      <View style={styles.boxTwo}>
        <Text style={styles.label}>
          Item Name
        </Text>
        <Text style={styles.product}>
          Uncle Toby’s Chewy Apricot
        </Text>
        <View style={styles.hLine}> </View>
      </View>
      <View style={styles.boxThree}>
        <Text style={styles.label}>
          Details
        </Text>
        <Text style={styles.detail}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet
        </Text>
        <View style={styles.hLine}> </View>
      </View>
      <View style={styles.space}> </View>
      <Button
        title={'Flag'}
        onPress={() => alert('Success')}
      />
    </View>
  );
}
export default Flag;
