import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {useFetch} from '../../hooks';
import {ProductItem, Banner} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Loading, Error, SearchBar} from '../../components';

const API_URL = 'https://fakestoreapi.com/products/category/';

function categoryProducts(props) {
  const {category_name} = props.route.params;

  const {data, loading, error} = useFetch(API_URL+category_name);

  //console.log('category_name', API_URL+category_name)
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (data) {
    // dispatch({type: 'SET_PRODUCTS', payload: {products: data}});
  }
  const renderProduct = ({item}) => (
    <ProductItem
      item={item}
      onSelect={() => props.navigation.navigate('DetailsScreen', {item: item})}
    />
  );

  return (
    <SafeAreaView>
      <Header title={category_name} />
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

export {categoryProducts};
