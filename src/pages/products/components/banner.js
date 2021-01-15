import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export function Banner({categories, onPress}) {
  const renderProduct = ({item}) => (
    <TouchableOpacity onPress={() => onPress(item)} >
      <ImageBackground
        source={require('../../../assets/shop.jpg')}
        style={{height: 50, width: 150, justifyContent: 'center', margin: 10}}
        imageStyle={{borderRadius: 100}}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color:'white'}}>
          {item}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
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
