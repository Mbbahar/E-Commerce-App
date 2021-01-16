import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {order_history} from './styles';

export function OrderHistory() {
  const [modalVisible, setModalVisible] = useState(false);
  const [storageOrder, setStorageOrder] = useState();
  async function GetOrderHistory() {
    const history = await AsyncStorage.getItem('@ORDERS');
    // const parsedHistory=JSON.parse(history);
    setStorageOrder(history);
    // console.log(parsedHistory)
  }

  // const renderHistory=({item})=>{<Text style={styles.modalText}>{item.TotalPrice}</Text>};
  return (
    <View style={order_history.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={order_history.container}>
          {storageOrder ? (
            <ScrollView style={order_history.modalView}>
              <Text style={order_history.modalText}>{storageOrder}</Text>

              {/* <FlatList
            keyExtractor={(_,i)=>i.toString()}
            data={storageOrder}
          renderItem={renderHistory}/> */}

              <Icon
                name="close-circle"
                color="tomato"
                size={30}
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </ScrollView>
          ) : (
            <View style={order_history.modalView}>
              <Text style={order_history.modalText}>
                Sipariş Geçmişiniz Bulunmamaktadır!
              </Text>
              <Icon
                name="close-circle"
                color="tomato"
                size={30}
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          )}
        </View>
      </Modal>

      <TouchableHighlight
        style={order_history.button_container}
        onPress={() => {
          setModalVisible(true);
          GetOrderHistory();
        }}>
        <Text style={order_history.button_text}>Sipariş Geçmişi</Text>
      </TouchableHighlight>
    </View>
  );
}
