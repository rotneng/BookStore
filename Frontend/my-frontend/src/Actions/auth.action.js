import axios from "axios";
import { authConstant, booksConstant } from "./constant";

export const login = (loginData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.SIGNIN_REQUEST });
      const response = await axios.post(
        "http://localhost:3001/auth/signin",
        loginData
      );
      if (response.status == 200) {
        const { user, token } = response.data;
        dispatch({
          type: authConstant.SIGNIN_SUCCESS,
          payload: { user, token },
        });
        navigate("/", { replace: true });
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: authConstant.SIGNIN_FAILURE,
          payload: { error: errorMessage },
        });
      }
    } catch (err) {
      console.log("error in login action", err);
      dispatch({ type: authConstant.SIGNIN_FAILURE });
    }
  };
};

export const signUp = (signupData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.SIGNUP_REQUEST });
      const response = await axios.post(
        "http://localhost:3001/auth/signUp",
        signupData
      );
      if (response.status == 201) {
        // const {user,token} = response.data
        dispatch({ type: authConstant.SIGNUP_SUCCESS });
        navigate("/login", { replace: true });
      } else {
        const errorMessage = response.data.message;
        dispatch({
          type: authConstant.SIGNUP_FAILURE,
          payload: { error: errorMessage },
        });
      }
    } catch (err) {
      console.log("error in Signup action");
    }
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstant.LOGOUT_REQUEST });
      // const response = await axios.post("");

      // if () {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      await dispatch({ type: authConstant.LOGOUT_SUCCESS });

      // navigate("/login", { replace: true });
      // } else {
      //   const errorMessage = response.data.message;
      //   dispatch({
      //     type: authConstant.LOGOUT_FAILURE,
      //     payload: { error: errorMessage },
      //   });
      // }
    } catch (err) {
      console.log("Error in logout action", err);
    }
  };
};
