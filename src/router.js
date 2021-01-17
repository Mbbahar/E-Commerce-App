import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Favorites,
  Products,
  Cart,
  ProductDetails,
  categoryProducts,
} from './pages';
import MainProvider from './context/MainProvider';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductsScreen" component={Products} />
      <Stack.Screen
        name="categoryProductsScreen"
        component={categoryProducts}
      />
      <Stack.Screen name="DetailsScreen" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MainStack"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => setIcon(focused, color, route),
            tabBarLabel: ({color}) => setLabel(color, route),
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="MainStack" component={MainStack} />
          <Tab.Screen name="FavoritesScreen" component={Favorites} />
          <Tab.Screen name="CartScreen" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}

export default Router;

function setIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'CartScreen':
      iconName = focused ? 'cart' : 'cart-outline';
      break;
    case 'MainStack':
      iconName = focused ? 'view-list' : 'view-list-outline';
      break;
    case 'FavoritesScreen':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    default:
      break;
  }
  return <Icon name={iconName} color={color} size={30} />;
}

function setLabel(color, route) {
  let label;

  switch (route.name) {
    case 'CartScreen':
      label = 'Sepetim';
      break;
    case 'MainStack':
      label = 'Ürünler';
      break;
    case 'FavoritesScreen':
      label = 'Favorilerim';
      break;

    default:
      break;
  }
  return <Text style={{color: color}}>{label}</Text>;
}
