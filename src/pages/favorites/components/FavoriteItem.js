import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {product_item} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function FavoriteItem({item, onRemove}) {
  return (
    <TouchableOpacity style={product_item.container}>
      <Image style={product_item.image} source={{uri: item.image}} />
      <Text style={product_item.text} numberOfLines={2}>{item.title}</Text>
      <Icon
          style={{alignSelf: 'flex-end'}}
          name="heart"
          size={25}
          color="tomato"
          onPress={onRemove}
        />
    </TouchableOpacity>
  );
}