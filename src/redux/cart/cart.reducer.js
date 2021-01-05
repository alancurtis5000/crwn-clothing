import { cartActionTypes } from "./cart.types";

const initalState = {
  hidden: true,
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
