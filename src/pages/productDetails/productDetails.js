import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import { DetailsItem } from './components/detailsItem';

function ProductDetails(props) {
  const {item} = props.route.params;
  const dispatch = useDispatch();

  return (
    <DetailsItem item={item} AddToCart={()=>dispatch({type: 'ADD_TO_CART', payload: {item}})}/>
  );
}

export {ProductDetails};