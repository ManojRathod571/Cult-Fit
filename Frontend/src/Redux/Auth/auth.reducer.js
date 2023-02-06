import { AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "./auth.types";

let token = localStorage.getItem("token");

const iState = {
  authLoading: false,
  authError: false,
  data: {
    token: token || "",
    isAuth: !!token,
  },
};

export const authReducer = (state = iState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };

    case AUTH_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        authLoading: false,
        data: {
          ...state.data,
          token: payload,
          isAuth: true,
        },
      };

    case AUTH_LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        data: {
          ...state.data,
          isAuth: false,
        },
      };

    default:
      return state;
  }
};
