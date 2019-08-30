const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  errorMsg: null,
  successMsg: null,
  isLogin: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
        successMsg: action.payload.successMsg
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      };
    case "GETADMIN_SUCCESS":
        
      return {
        ...state,
        user: action.payload.AdminProfile,
        isLogin: true,
        errorMsg: null,
        successMsg: action.payload.successMsg
      };
    case "GETADMIN_FAIL":
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
}
