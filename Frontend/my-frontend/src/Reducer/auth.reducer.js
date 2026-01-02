import { authConstant } from "../Actions/constant";

const initialState = {
  token: null,
  user: {
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    isVerified: false,
  },
  authenticate: false,
  authenticating: false,
  error: null,
  loading: false,
  message: "",
  authCheck: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstant.SIGNIN_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: null,
        message: "",
        loading: true,
      };
    case authConstant.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authCheck: true,
        authenticating: false,
        error: null,
        message: "",
        loading: false,
      };
    case authConstant.SIGNIN_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload.error,
        user: initialState.user,
        authCheck: true,
        authenticate: false,
        token: null,
      };
    case authConstant.SIGNUP_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: null,
        message: "",
        loading: true,
      };
    case authConstant.SIGNUP_SUCCESS:
      return {
        ...state,
        authenticate: true,
        authCheck: true,
        authenticating: false,
        error: null,
        message: "",
        loading: false,
      };
    case authConstant.SIGNUP_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload.error,
        user: initialState.user,
        authCheck: true,
        authenticate: false,
        token: null,
      };
    case authConstant.LOGOUT_REQUEST:
      return {
        ...state,
        authenticating: true,
        authCheck: true,
        error: null,
        message: "",
        loading: true,
      };
    case authConstant.LOGOUT_SUCCESS:
      return {
        ...initialState,
        user: initialState.user,
        token: null,
        authenticate: false,
        authCheck: true,
        authenticating: false,
        error: null,
        message: "Logout Succesful",
        loading: false,
      };
    case authConstant.LOGOUT_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload.error,
        user: initialState.user,
        authCheck: true,
        authenticate: false,
      };
    default:
      return state;
  }
};
