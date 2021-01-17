import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {CustomButton} from '../../../components/customButton';
import {Footer} from '../../../components/footer';
import {Header} from '../../../components/header';
import {details_item} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DetailsItem({item, AddToCart, onLike, isPressed}) {
  return (
    <SafeAreaView style={details_item.container}>
      <Header title="Ürün detayı" />

      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.image}} style={details_item.image} />
        <Icon
          style={{alignSelf: 'flex-start', marginRight: 10}}
          name= {isPressed ? "heart" : "heart-outline"}
          size={25}
          color="tomato"
          onPress={onLike}
        />
      </View>
      <View style={details_item.title_container}>
        <Text style={details_item.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
      <Text style={details_item.description}>{item.description}</Text>
      <Footer>
        <Text style={details_item.price}>{item.price} $</Text>
        <CustomButton title="Sepete Ekle" onClick={AddToCart} />
      </Footer>
    </SafeAreaView>
  );
}
