import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width:336,
    height:40,
    flexDirection:'row',
    marginLeft: 19.5,
    marginTop:64,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor:'#fff',
    borderRadius:5,
  },
  title: {
    lineHeight:40,
    fontSize:20,
    fontWeight:380,
    color:'#fff',
    paddingLeft:80,
  },
  boxOne: {
    width:336,
    height:54,
    marginLeft: 19.5,
    marginTop:40,
  },
  boxTwo: {
    width:336,
    height:40,
    marginLeft: 19.5,
    marginTop:56,
  },
  hLine: {
    marginTop:9,
    borderBottomColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boxThree: {
    width:336,
    height:170,
    marginLeft: 19.5,
    marginTop:47,
  },
  label: {
    fontSize:12,color:'#fff'
  },
  detail: {
    fontSize:14,
    fontWeight:'500',
    color:'#fff',
    paddingLeft:11,
    paddingBottom:8,
    paddingTop:4
  },
  product: {
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    paddingLeft:11,
    paddingTop:4
  },
  space: {
    width: 375,
    height: 180,
  }
})
export default styles;
