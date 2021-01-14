import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {ProductItem} from './components/productItem';
import {useDispatch} from 'react-redux';
import { Header } from '../../components/header';

const API_URL = 'https://fakestoreapi.com/products/';

function Products(props) {
  const {data, loading, error} = useFetch(API_URL);
  const dispatch = useDispatch();

  const renderProduct = ({item}) => (
    <ProductItem
      item={item}
      onSelect={() => props.navigation.navigate('DetailsScreen', {item: item})}
    />
  );

  const renderHeader = () => (<Header title='Ürünler'/>);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

export {Products};