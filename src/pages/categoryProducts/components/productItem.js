import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {product_item} from './styles';

export function ProductItem({item, onSelect}) {
  return (
    <TouchableOpacity style={product_item.container} onPress={onSelect}>
      <Image style={product_item.image} source={{uri: item.image}} />
      <Text style={product_item.text} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
