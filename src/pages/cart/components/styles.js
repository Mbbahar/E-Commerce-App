import {StyleSheet} from 'react-native';

const cart_item = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'tomato',
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  image:{
    borderRadius:100,
    width:50,
    height:50
  },
  details_container:{
    flex:1,
    marginLeft:10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:5,

  },
  price:{
    color:'grey',
    fontWeight:'bold',
  },
});

export {cart_item};