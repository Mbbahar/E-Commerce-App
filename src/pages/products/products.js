import React, {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {useFetch} from '../../hooks';
import {ProductItem, Banner} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Loading, Error, SearchBar} from '../../components';

const API_URL_PRODUCTS = 'https://fakestoreapi.com/products/';
const API_URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';

function Products(props) {
  const {data, loading, error} = useFetch(API_URL_PRODUCTS);
  const {data: categories, loading: looding_category, error: error_category} = useFetch(API_URL_CATEGORIES);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (data) {
    dispatch({type: 'SET_PRODUCTS', payload: {products: data}});
  }

  const renderProduct = ({item}) => (
    <ProductItem
      item={item}
      onSelect={() => props.navigation.navigate('DetailsScreen', {item: item})}
    />
  );

  const renderHeader = () => <Banner categories={categories} 
  //onPress={(i) => console.log('asdd', i)} 
  onPress={(i) => props.navigation.navigate('categoryProductsScreen', {category_name: i})}
  />;

  return (
    <SafeAreaView>
      <Header title="Ürünler" />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={productList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

export {Products};
