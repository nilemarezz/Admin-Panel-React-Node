export const AddFoodAdmin = newFood => {
    return async (dispatch, getState) => {
      const response = await fetch("http://localhost:5000/ItemAdmin/addFood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(newFood)
      });
      const data = await response.json();
      console.log(data)
      
        dispatch({ type: "ADDFOOD_SUCCESS", payload: data });
      }
    };
  
  