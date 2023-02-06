import {
  GETDATA_ERROR,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
} from "./getData.types";
import axios from "axios";

export const getData =
  (category, page, q = "", price = "", disSort = "", off = "") =>
  (dispatch) => {
    dispatch({ type: GETDATA_LOADING });
    axios
      .get(
        `${process.env.REACT_APP_URL}/products?category=${category}&q=${q}&price=${price}&disSort=${disSort}&off=${off}&page=${page}&limit=24`
      )
      .then((res) => dispatch({ type: GETDATA_SUCCESS, payload: res.data }))
      .catch((error) => dispatch({ type: GETDATA_ERROR }));
  };
