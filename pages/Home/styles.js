import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // -------------header---------------
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
    flexDirection: 'row',
    width: 99,
    height: 36,
    marginTop: 9,
    paddingLeft: 13,
    paddingTop: 9,
    paddingBottom: 7,
    borderRadius: '10px',
    backgroundColor: '#fff'
  },
  picker: {
    height:'100%',
    paddingLeft: 11,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#FFA92C'

  },
  arrow: {
    paddingLeft:11,
    paddingTop: 7,
  },

  // ------------------body...------------------
  userItem: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginLeft: 19.5,
    marginRight: 19.5,
  }
})
export default styles;
