import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.types";

const iState = {
  cartloading: false,
  cartError: false,
  // token: "z:z:6372260fe38600fbf7d3a430:z",
  cartData: [],
};

export const cartReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING:
      return {
        ...state,
        cartloading: true,
        cartError: false,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cartloading: false,
        cartData: [...state.cartData, payload],
      };

    case GET_CART_ERROR:
      return {
        ...state,
        cartError: true,
      };

    default:
      return state;
  }
};
