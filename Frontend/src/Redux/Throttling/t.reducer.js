import React from "react";
import {
  GET_INOUT_SUCCESS,
  GET_INPUT_LOADING,
  GTE_INPUT_ERROR,
} from "./t.type";

const initState = {
  inputLoading: false,
  inputError: false,
  inputData: [],
};

function inputReducer(state = initState, action) {
  switch (action.type) {
    case GET_INPUT_LOADING:
      return {
        ...state,
        inputLoading: true,
        inputError: false,
      };

    case GET_INOUT_SUCCESS:
      return {
        ...state,
        inputLoading: false,
        inputData: action.payload,
      };

    case GTE_INPUT_ERROR:
      return {
        ...state,
        inputError: true,
      };

    default:
      return state;
  }
}

export default inputReducer;
