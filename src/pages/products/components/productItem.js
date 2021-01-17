import React from 'react';
import {TouchableOpacity, Text, Image, View, Dimensions} from 'react-native';
import {product_item} from './styles';

const device_size = Dimensions.get('window');

export function ProductItem({item, onSelect}) {
  return (
    // <TouchableOpacity style={product_item.container} onPress={onSelect}>
    //   <Image style={product_item.image} source={{uri: item.image}} />
    //   <Text style={product_item.text} numberOfLines={2}>{item.title}</Text>

    // </TouchableOpacity>

    <TouchableOpacity
      style={{flex: 1, backgroundColor: 'white', margin: 10, borderRadius: 10}}
      onPress={onSelect}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: item.image}}
          style={{
            flex: 1,
            height: device_size.height / 5,
            width: device_size.width / 2,
            margin: 5,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 15,
          borderTopColor: '#ff634750',
          borderTopWidth: 1,
          margin: 10,
        }}>
        <Text
          style={{fontSize: 16, fontWeight: 'bold', color: '#C0C0C0'}}
          numberOfLines={2}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#91a6bb',
          }}>
          {item.price} $
        </Text>
      </View>
    </TouchableOpacity>
  );
}
