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
    case "GETADMIN_SUCCESS" :
        console.log(action.data)
    case "GETADMIN_FAIL":
        console.log(action.data)
    default:
      return state;
  }
}
