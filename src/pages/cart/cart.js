import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import { CustomButton } from '../../components/customButton';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import {CartItem} from './components/cartItem'
import { cart_list } from './styles';

function Cart(props) {
  const cartlist = useSelector((state) => state.cart);
  const totalPrice= useSelector((state) => state.total);
  const dispatch = useDispatch();

  const renderCart = ({item}) => <CartItem item={item} 
  onDelete={()=>dispatch({type: 'DELETE_ITEM_FROM_CART', payload: {item}})}/>;
  const renderHeader = () => (<Header title='Sepetim'/>);
    return (
      <SafeAreaView style={cart_list.Container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={cartlist}
        renderItem={renderCart}
        
        ListEmptyComponent={
          <View style={cart_list.emptyList_container}>
            <Icon name='cart-remove' size={100} style={cart_list.emptyList_icon}/>
            <Text style={cart_list.emptyList_text}>Sepetinizde ürün bulunmamaktadır!</Text>
            <CustomButton title='Ürünlere Git' onClick={()=>props.navigation.navigate('ProductsScreen')}/>
          </View>
      }
      />
      {cartlist.length != 0 ?
      (<Footer>
        <Text style={cart_list.price}>{totalPrice.toFixed(2)} $</Text>
        <CustomButton title='Sepeti Onayla' onClick={()=>dispatch({type: 'SUBMIT_ORDER'})}/>
      </Footer>)
        : null}
    </SafeAreaView>
  );
      
}
    
export {Cart};