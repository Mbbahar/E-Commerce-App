import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

export function Banner({categories, onPress}) {
  const renderProduct = ({item}) => (
    <TouchableHighlight onPress={() => onPress(item)}>
      <ImageBackground
        source={require('../../../assets/shop.jpg')}
        style={{height: 50, width: 150, justifyContent: 'center', margin: 10}}
        imageStyle={{borderRadius: 100}}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          {item}
        </Text>
      </ImageBackground>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView>
      <FlatList
        // ListHeaderComponent={renderHeader}
        data={categories}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
        horizontal
      />
    </SafeAreaView>
  );
}
