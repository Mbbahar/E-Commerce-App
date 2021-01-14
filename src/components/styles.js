import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const header = StyleSheet.create({
    container:{
        backgroundColor:'#0001',
        padding:10,
        marginBottom:10,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'tomato',
    },
});

const footer = StyleSheet.create({
    container:{ 
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        margin:10,
    }
});

const custom_button = StyleSheet.create({
    container:{
        width:device_size.width/2,
        padding:10,
        backgroundColor:'tomato',
        borderRadius:5,
    },
    text:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
});

export {header, footer, custom_button};