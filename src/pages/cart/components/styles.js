import {StyleSheet} from 'react-native';

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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  modalText: {
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export {cart_item, order_history};
