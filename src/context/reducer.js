function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        const {item} = action.payload;
        return{...state, cart: [...state.cart, item],total: state.total+item.price}
      case 'DELETE_ITEM_FROM_CART':
        const {item: Item} = action.payload;
        const index = state.cart.findIndex((x) => x.id === Item.id);
        state.cart.splice(index, 1);
        // const newCart= state.cart.filter((cartItem)=> cartItem.id != Item.id);
        return{...state,cart:[...state.cart],total:state.total-Item.price};
      case 'SUBMIT_ORDER':
        alert('Your Order has been received successfuly');
        return{...state,cart:[],total:0};
      default:
        return state;
    }
  }
  
  export default reducer;