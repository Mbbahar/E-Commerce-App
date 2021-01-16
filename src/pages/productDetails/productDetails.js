import React from 'react';
import {useDispatch} from 'react-redux';
import {useAsyncStorage} from '../../hooks';
import {DetailsItem} from './components/detailsItem';

const key = '@FAVORITE';

function ProductDetails(props) {
  const {item} = props.route.params;
  const dispatch = useDispatch();

  const [getStorageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(
    key,
  );

  return (
    <DetailsItem
      item={item}
      AddToCart={() => dispatch({type: 'ADD_TO_CART', payload: {item}})}
      onLike={() => updateStorageItem(item)}
    />
  );
}

export {ProductDetails};
