export const LoginUser = AdminUser => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/auth/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(AdminUser)
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } else {
      dispatch({ type: "LOGIN_FAIL", payload: data });
    }
  };
};

export const getAdminProfile = AdminUser => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "http://localhost:5000/auth/admin/getAdminProfile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(AdminUser)
      }
    );
    const data = await response.json();
    
    if (!data.AdminProfile) {
      dispatch({ type: "GETADMIN_FAIL", payload: data });
      
    } else {
      dispatch({ type: "GETADMIN_SUCCESS", payload: data });
    }
  };
};
