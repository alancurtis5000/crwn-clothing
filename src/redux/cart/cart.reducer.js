import { cartActionTypes } from "./cart.types";

const initalState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
