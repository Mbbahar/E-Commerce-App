import {Dimensions, StyleSheet} from 'react-native';

const cart_item = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'tomato',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  details_container: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: 'grey',
    fontWeight: 'bold',
  },
});

const order_history = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    width: Dimensions.get('window').width * 0.9,
    margin: 15,
    backgroundColor: '#0001',
    borderRadius: 20,
  },
  button_container: {
    backgroundColor: '#0006',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  empty_list_container: {
    padding: 30,
  },
  empty_list_text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 25,
    alignSelf: 'center',
  },
  empty_list_animation: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    borderRadius: 100,
  },
});

const history_item = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  item_container: {
    margin: 5,
    padding: 5,
    borderColor: '#0001',
    borderBottomWidth: 2,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
  price_conteiner: {
    flexDirection: 'row',
    paddingTop: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price_title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: 'tomato',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export {cart_item, order_history, history_item};
