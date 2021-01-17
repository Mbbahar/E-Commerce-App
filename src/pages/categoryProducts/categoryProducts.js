import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useFetch} from '../../hooks';
import {ProductItem} from './components';
import {Header, Loading, Error} from '../../components';

const API_URL = 'https://fakestoreapi.com/products/category/';

function categoryProducts(props) {
  const {category_name} = props.route.params;
  const {data, loading, error} = useFetch(API_URL + category_name);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (data) {
    console.log('data', data);
  }

  const renderProduct = ({item}) => (
    <ProductItem
      item={item}
      onSelect={() => props.navigation.navigate('DetailsScreen', {item: item})}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
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
