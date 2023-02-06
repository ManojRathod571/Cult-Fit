import {
  PIN_ERROR,
  PIN_LOACTION,
  PIN_LOADING,
  PIN_SUCCESS,
} from "./pincode.types";

const iState = {
  pinLoading: false,
  pinError: false,
  pinData: [],
  pinCode: "",
};

export const pinReducer = (state = iState, action) => {
  switch (action.type) {
    case PIN_LOADING:
      return {
        ...state,
        pinLoading: true,
      };

    case PIN_SUCCESS:
      return {
        ...state,
        pinData: action.payload,
        pinLoading: false,
      };
    case PIN_ERROR:
      return {
        ...state,
        pinError: true,
        pinLoading: false,
      };

    case PIN_LOACTION:
      return {
        ...state,
        pinCode: action.payload,
      };
    default:
      return state;
  }
};
