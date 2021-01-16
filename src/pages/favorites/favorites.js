import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {FavoriteItem} from './components';
import {Header} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useAsyncStorage} from '../../hooks';

const key = '@FAVORITE';

function Favorites(props) {
  const favlist = useSelector((state) => state.favorites);

  const [getStorageItem, updateStorageItem, clearStorageItem] = useAsyncStorage(
    key,
  );

  useEffect(() => {
    getStorageItem();
  }, []);

  const renderPost = ({item}) => (
    <FavoriteItem item={item} onRemove={() => clearStorageItem(item)} />
  );

  const renderHeader = () => <Header title="Favoriler" />;

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
