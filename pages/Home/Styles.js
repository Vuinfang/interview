import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  // -------------header---------------
  top: {
    width: '100%',
    height: 142,
    backgroundColor: '#FFA92C',
    color: '#fff'
  },
  item: {
    flexDirection: 'row',
    marginTop: 67,
  },
  username: {
    width: 204,
    height: 48,
    marginLeft: 19,
  },
  mood: {
    flexDirection: 'row',
    width: 99,
    height: 36,
    marginTop: 9,
    paddingLeft: 13,
    paddingTop: 9,
    paddingBottom: 7,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  picker: {
    height:'100%',
    paddingLeft: 11,
    lineHeight: 20,
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
    marginLeft: 19,
    marginRight: 19,
  }
})
export default Styles;
