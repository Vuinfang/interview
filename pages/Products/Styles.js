import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  boxOne: {
    margin: 'auto',
    width: '100%',
    height: '45%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: -1,
    // justifyContent: 'column',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  iconBoxTwo: {
    paddingLeft: 11,
    paddingTop: 10,
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',

  },
  iconOne: {
    margin: 'auto',
    marginTop: 64,
    marginBottom: 2,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 19,
    // width:336,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTwo: {
    margin: 'auto',
    marginTop: 2,
    paddingTop: 7,
    paddingLeft: 19,
    paddingRight: 19,
    width: '100%',
    height: 40,
    flexDirection: 'row-reverse',
  },
//------------- Box two ---------------
  boxTwo: {
    margin: 'auto',
    justifyContent: 'space-around',
    width: '100%',
    height: '55%',
    alignItems: 'center',
    paddingBottom: 50,
  },
  category: {
    width: '100%',
    height: 55,
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  smileEmj: {
    width: 76,
    height: 76,
    marginTop: -30,
    marginLeft: 19,
    borderRadius: 38,
    backgroundColor: '#fff',
  },
  smileIcon: {
    // width: 42,
    // height: 43,
    marginTop: 14,
    marginLeft: 17,
  },
  cateIconBox: {
    marginRight: 19,
    width: 261,
    height: 50,
    backgroundColor: '#fff'
  },
  cateIcon: {
    marginTop: 15,
    marginLeft: 181,
    paddingTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
    height: 25,
    backgroundColor: '#FFA92C',
    borderRadius: 5,
  },
  wordSnack: {
    paddingRight: 3,
    fontSize: 14,
    color: '#FFF'
  },
  name: {
    margin: 'auto',
    marginTop: -10,
    width: 336,
    height: 40,
  },
  brand: {
    fontSize: 20,
  },
  shop: {
    fontSize: 14,
    fontWeight: '500',
  },
  detail: {
    margin: 'auto',
    marginTop: -35,
    width: 336,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wordDetails: {
    fontSize: 14,
    color: '#FFA92C',
    lineHeight: 45
  },
  rightArrow: {
    fontSize: 20,
    color: '#FFA92C',
    paddingTop: 15,
  },
  user: {
    margin: 'auto',
    marginTop: -35,
    width: 336,
    height: 76,
    // height: 25,
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25,
  },
  userDetail: {
    margin: 'auto',
    // marginLeft: 19,
    // marginRight: 19,
    width: 336,
    height: 51,
    flexDirection: 'row',
  },
  userBoxOne: {
    alignItems: 'center',
    width: 51,
    height: 51,
    borderRadius: 5,
    backgroundColor: '#FEE239'
  },
  userBoxTwo: {
    alignItems: 'center',
    width: 51,
    height: 51,
    borderRadius: 5,
    backgroundColor: '#FFA92C'
  },
  moodStyle: {
    // paddingLeft: 16,
    paddingTop: 7,
  },
  shortName: {
    textAlign: 'center',
    textAlignVertical: 'center',
    // paddingLeft: 17,
    paddingTop: 3,
    color: '#fff'
  },
  detailRowOne: {
    marginRight: 19,
    width: 304,
    height: 25,
    flexDirection: 'row',
  },
  choice: {
    marginLeft: 5,
    paddingLeft: 10,
    width: 140,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink'
  },
  space: {
    marginBottom: 20,
  },
  bottom: {
    position: 'absolute',
    margin: 'auto',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: '10%',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#FFA92C',
  },
})
export default Styles;
