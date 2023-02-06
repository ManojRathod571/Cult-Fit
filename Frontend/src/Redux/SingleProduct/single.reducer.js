import { SINGLE_ERROR, SINGLE_LOADING, SINGLE_SUCCESS } from "./single.types";

const iState = {
  singleLoading: false,
  singleError: false,
  singleData: {},
};

export const singleReducer = (state = iState, action) => {
  switch (action.type) {
    case SINGLE_LOADING:
      return {
        ...state,
        singleLoading: true,
      };

    case SINGLE_SUCCESS:
      return {
        ...state,
        singleLoading: false,
        singleData: action.payload,
      };
    case SINGLE_ERROR:
      return {
        ...state,
        singleError: true,
      };

    default:
      return state;
  }
};
