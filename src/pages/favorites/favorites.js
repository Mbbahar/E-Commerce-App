import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteItem} from './components';
import { Header} from '../../components';
import {useSelector, useDispatch} from 'react-redux';

const key = '@FAVORITE';

function Favorites(props) {
  const dispatch = useDispatch();
  const favlist = useSelector((state) => state.favorites);

  async function getItem() {
    const data = await AsyncStorage.getItem(key);

    if (data) {
      dispatch({type: 'SET_FAVORITE', payload: {fav: JSON.parse(data)}});
      //console.log('setfav',data);
    }
  }
  useEffect(() => {
    getItem()
  }, [])

  async function onRemove(item) {
    dispatch({type: 'REMOVE_TO_FAVORITE', payload: {data: item}})
    const favListStr = await JSON.stringify(favlist);
    await AsyncStorage.setItem('@FAVORITE', favListStr);
  }

  const renderPost = ({item}) => <FavoriteItem item={item} onRemove={() => onRemove(item)} />;

  const renderHeader = () => (<Header title='Favoriler'/>);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={favlist}
        renderItem={renderPost}
      />
    </SafeAreaView>
  );
}

export {Favorites};