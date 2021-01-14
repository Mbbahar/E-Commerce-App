import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useFetch, useAsyncStorage} from '../../hooks';
import {ProductItem} from './components/productItem';
import {useDispatch} from 'react-redux';
import {Header, Loading, Error} from '../../components';

const API_URL = 'https://fakestoreapi.com/products/';
const key = '@FAVORITE';

function Products(props) {
  const {data, loading, error} = useFetch(API_URL);
  const dispatch = useDispatch();

  const [storageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(
    key,
  );

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
      onLike={() => updateStorageItem(item)}
    />
  );

  const renderHeader = () => <Header title="Ürünler" />;

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
