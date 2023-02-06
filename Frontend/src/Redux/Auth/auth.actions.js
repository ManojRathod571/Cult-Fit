import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./auth.types";

export const getLOGINFUNC = (form) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(`${process.env.REACT_APP_URL}/user/login`, form)
    .then((res) => dispatch({ type: AUTH_SUCCESS, payload: res.data.token }))
    .catch((err) => dispatch({ type: AUTH_ERROR }));
};


export const LOGOUT = () => (dispatch) => {
    dispatch({type:AUTH_LOGOUT})
}