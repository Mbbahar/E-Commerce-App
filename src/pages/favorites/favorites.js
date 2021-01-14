import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import { useAsyncStorage} from '../../hooks';
import {FavoriteItem} from './components';
import { Header} from '../../components';
import {useSelector} from 'react-redux';

const key = '@FAVORITE';

function Favorites(props) {
  const favlist = useSelector((state) => state.favorites);

  const [storageItem, updateStorageItem, clearStorageItem]  = useAsyncStorage(key);
  const renderPost = ({item}) => <FavoriteItem item={item} onRemove={() => clearStorageItem(item)} />;

  const renderHeader = () => (<Header title='Favoriler'/>);

  console.log('favlist', favlist)
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