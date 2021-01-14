function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      const {products} = action.payload;
      return {...state, products};

    case 'SET_FAVORITE':
      const {fav} = action.payload;
      return {...state, favorites: [...state.favorites, fav]};

    case 'ADD_TO_FAVORITE':
      const {data} = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, data],
      };

    case 'REMOVE_TO_FAVORITE':
      const {data: Data} = action.payload;
      const i = state.favorites.findIndex((x) => x.id === Data.id);
      state.favorites.splice(i, 1);
      return {...state, favorites: [...state.favorites]};

    case 'ADD_TO_CART':
      const {item} = action.payload;
      return {
        ...state,
        cart: [...state.cart, item],
        total: state.total + item.price,
      };

    case 'DELETE_ITEM_FROM_CART':
      const {item: Item} = action.payload;
      const index = state.cart.findIndex((x) => x.id === Item.id);
      state.cart.splice(index, 1);
      // const newCart= state.cart.filter((cartItem)=> cartItem.id != Item.id);
      return {...state, cart: [...state.cart], total: state.total - Item.price};

    case 'SUBMIT_ORDER':
      alert('Your Order has been received successfuly');
      return {...state, cart: [], total: 0};

    default:
      return state;
  }
}

export default reducer;
