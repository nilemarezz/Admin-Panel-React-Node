export const AddAdmin = (newAdmin) => {
    return async (dispatch, getState) => {
      
      const response = await fetch(`http://localhost:5000/auth/admin/addAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(newAdmin)
      });
      const data = await response.json();
      
      if (data.newAdmin) {
        dispatch({ type: "AddADMIN_SUCCESS", payload: data });
      } else {
        dispatch({ type: "AddADMIN_FAIL", payload: data });
      }
    }
  };

  export const DeleteAdmin = (id) => {
    return async (dispatch, getState) => {
      
      const response = await fetch(`http://localhost:5000/auth/admin/deleteAdmin/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "auth-token": localStorage.getItem("token")
        }
      });
      const data = await response.json();
      
      if (data.DeleteAdmin) {
        dispatch({ type: "DELETEADMIN_SUCCESS", payload: data });
      } else {
        dispatch({ type: "DELETEADMIN_FAIL", payload: data });
      }
    }
  };