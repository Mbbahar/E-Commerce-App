import {StyleSheet} from 'react-native';

const cart_list=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'white'
    },
    emptyList_container:{
       flex:1,
       alignItems:'center',
    },
    emptyList_icon:{
        marginVertical:50,
        color:'tomato',
        padding:5,
    },
    emptyList_text:{
        color: 'grey',
        fontSize: 18,
        marginBottom:50,
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        color:'tomato',
        marginBottom:10,
        marginLeft:30,
    },
  });

  export {cart_list};