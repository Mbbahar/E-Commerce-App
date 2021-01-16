import React from 'react';
import {SafeAreaView, View, Text, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton, Header, Footer} from '../../components';
import {OrderHistory, CartItem} from './components';
import {cart_list} from './styles';

function Cart(props) {
  const cartlist = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.total);
  const dispatch = useDispatch();

  async function SubmitOrder() {
    let orders = await AsyncStorage.getItem('@ORDERS');
    if (!orders) {
      orders = [];
    } else {
      orders = JSON.parse(orders);
    }
    // const titles=cartlist.map(item =>item.title);
    orders.push({
      Order: cartlist.map((item) => item.title),
      TotalPrice: totalPrice,
    });
    orders = JSON.stringify(orders);

    await AsyncStorage.setItem('@ORDERS', orders);
    Alert.alert('* Bilgi *', 'Siparişiniz alınmıştır');
    dispatch({type: 'SUBMIT_ORDER'});
    // console.log('Push',JSON.parse(orders)[0].TotalPrice);
  }

  const renderCart = ({item}) => (
    <CartItem
      item={item}
      onDelete={() =>
        dispatch({type: 'DELETE_ITEM_FROM_CART', payload: {item}})
      }
    />
  );

  const renderHeader = () => <Header title="Sepetim" />;

  return (
    <SafeAreaView style={cart_list.Container}>
      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={renderHeader}
          keyExtractor={(_, i) => i.toString()}
          data={cartlist}
          renderItem={renderCart}
          ListEmptyComponent={
            <View style={cart_list.emptyList_container}>
              <Icon
                name="cart-remove"
                size={100}
                style={cart_list.emptyList_icon}
              />
              <Text style={cart_list.emptyList_text}>
                Sepetinizde ürün bulunmamaktadır!
              </Text>
              <CustomButton
                title="Ürünlere Git"
                onClick={() => props.navigation.navigate('ProductsScreen')}
              />
              <OrderHistory />
            </View>
          }
          // ListFooterComponent={cartlist.length === 0 && <OrderHistory/>}
        />
      </View>
      {cartlist.length != 0 ? (
        <View>
          <Footer>
            <Text style={cart_list.price}>{totalPrice.toFixed(2)} $</Text>
            <CustomButton title="Sepeti Onayla" onClick={SubmitOrder} />
          </Footer>
          <OrderHistory />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export {Cart};
