export const DeleteCustomer = (id) => {
    return async (dispatch, getState) => {
      
      const response = await fetch(`http://localhost:5000/Item/deleteCustomer/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "auth-token": localStorage.getItem("token")
        }
      });
      const data = await response.json();
      console.log(data)
      
      if (data.deleteCustomer) {
        dispatch({ type: "DELETECUSTOMER_SUCCESS", payload: data });
      } else {
        dispatch({ type: "DELETECUSTOMER_FAIL", payload: data });
      }
    }
  };