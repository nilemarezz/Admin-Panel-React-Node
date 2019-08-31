export const GetItemAdmin = AdminUser => {
    return async (dispatch, getState) => {
      const response = await fetch("http://localhost:5000/ItemAdmin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(AdminUser)
      });
      const data = await response.json();
  
      if (data.Customer !== null && data.Food !== null) {
        localStorage.setItem("token", data.token);
        dispatch({ type: "GETITEM_SUCCESS", payload: data });
      } else {
        dispatch({ type: "GETITEM_FAIL", payload: data });
      }
    };
  };