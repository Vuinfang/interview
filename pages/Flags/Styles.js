import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFA92C',
    alignItems: 'center',
    height:'100%',
    width: '100%'
  },
  header: {
    width:336,
    height:40,
    flexDirection:'row',
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
    fontWeight: '400',
    color:'#fff',
    paddingLeft:80,
  },
  boxOne: {
    width:336,
    height:54,
    marginTop:40,
  },
  boxTwo: {
    width:336,
    height:40,
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
    marginTop:47,
  },
  label: {
    fontSize:12,color:'#fff'
  },
  detail: {
    fontSize:14,
    fontWeight: '500',
    color:'#fff',
    paddingLeft:11,
    paddingBottom:8,
    paddingTop:4
  },
  product: {
    fontSize: 16,
    fontWeight: '500',
    color:'#fff',
    paddingLeft:11,
    paddingTop:4
  },
  bottom: {
    position: 'absolute',
    margin:'auto',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: '#FFA92C',
  }
})
export default Styles;
