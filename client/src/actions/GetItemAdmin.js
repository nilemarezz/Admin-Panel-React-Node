export const GetItemAdmin = AdminUser => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/Item", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify(AdminUser)
    });
    const data = await response.json();
    
    
      dispatch({ type: "GETITEM_SUCCESS", payload: data });
    }
  };

