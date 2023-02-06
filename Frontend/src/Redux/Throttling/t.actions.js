import axios from "axios";
import {
  GET_INOUT_SUCCESS,
  GET_INPUT_LOADING,
  GTE_INPUT_ERROR,
} from "./t.type";

export const getInputData = (category,page, input) => (dispatch) => {
  dispatch({ type: GET_INPUT_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_URL}/products?category=${category}&input=${input}&page=${page}&limit=10`
    )
    .then((res) => dispatch({ type: GET_INOUT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GTE_INPUT_ERROR }));
};
