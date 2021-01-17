import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {FavoriteItem} from './components';
import {Header, CustomButton} from '../../components';
import {useSelector} from 'react-redux';
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

  const EmptyComponent = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{color: 'grey', fontSize: 18, marginBottom: 50}}>
          Henüz favorilere ürün eklemediniz!
        </Text>
        <CustomButton
          title="Ürünlere Git"
          onClick={() => props.navigation.navigate('ProductsScreen')}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={favlist}
        renderItem={renderPost}
        ListEmptyComponent={EmptyComponent}
      />
    </SafeAreaView>
  );
}

export {Favorites};
