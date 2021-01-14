import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

function useAsyncStorage(key) {
  const dispatch = useDispatch();
  const [storageItem, setStorageItem] = useState([]);

  async function getStorageItem() {
    const data = await AsyncStorage.getItem(key);

    console.log(JSON.parse(data));
    setStorageItem(JSON.parse(data));

    if (data) {
      dispatch({type: 'SET_FAVORITE', payload: {fav: JSON.parse(data)}});
      console.log('setfav');
    }
  }

  async function updateStorageItem(data) {
    let jobs = await AsyncStorage.getItem(key);

    if (!jobs) {
      jobs = [];
    } else {
      jobs = JSON.parse(jobs);
    }

    jobs.push(data);
    jobs = JSON.stringify(jobs);

    await AsyncStorage.setItem(key, jobs);
    console.log('Product Saved Successfuly');

    dispatch({type: 'ADD_TO_FAVORITE', payload: {data}});
  }

  async function clearStorageItem(data) {
    AsyncStorage.removeItem(key);
    setStorageItem(null);

    dispatch({type: 'REMOVE_TO_FAVORITE', payload: {data}});
  }

  useEffect(() => {
    getStorageItem();
  }, []);

  return [storageItem, updateStorageItem, clearStorageItem];
}
export {useAsyncStorage};
