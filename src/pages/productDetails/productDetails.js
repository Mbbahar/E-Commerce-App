import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DetailsItem } from './components/detailsItem';

function ProductDetails(props) {
  const {item} = props.route.params;
  const dispatch = useDispatch();
  const favlist = useSelector((state) => state.favorites);

  async function onLike(item) {
    await dispatch({type: 'ADD_TO_FAVORITE', payload: {data: item}})
    const favListStr = await JSON.stringify(favlist);
    await AsyncStorage.setItem('@FAVORITE', favListStr);
  }

  return (
    <DetailsItem item={item} 
    AddToCart={()=>dispatch({type: 'ADD_TO_CART', payload: {item}})}
    onLike={() => onLike(item)}
    />
  );
}

export {ProductDetails};