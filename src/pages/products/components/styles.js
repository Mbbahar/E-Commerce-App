import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const product_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    borderTopLeftRadius: 75,
    borderBottomLeftRadius: 75,
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75,
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 20,
  },
});

const banner = StyleSheet.create({
  image_background: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    borderRadius: 100,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {product_item, banner};
