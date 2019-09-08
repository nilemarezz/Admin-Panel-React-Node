export const AddFoodAdmin = newFood => {
  return async (dispatch, getState) => {
    
    const postfood = new FormData()
    postfood.append('name',newFood.name)
    postfood.append('amount',newFood.amount)
    postfood.append('price',newFood.price)
    postfood.append('description',newFood.description)
    postfood.append('image',newFood.image)
    
    const response = await fetch("http://localhost:5000/Item/addFood", {
      method: "POST",
      headers: {
        
        "auth-token": localStorage.getItem("token")
      },
      body: postfood
    });
    const data = await response.json();
    
    if (data.newFood) {
      dispatch({ type: "ADDFOOD_SUCCESS", payload: data });
    } else {
      dispatch({ type: "ADDFOOD_FAIL", payload: data });
    }
  }
};

export const DeleteFoodAdmin = id => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/Item/deleteFood/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "auth-token": localStorage.getItem("token")
      }
    });
    const data = await response.json();
    
    if (data.deleteFood) {
      dispatch({ type: "DELETEFOOD_SUCCESS", payload: data });
    } else {
      dispatch({ type: "DELETEFOOD_FAIL", payload: data });
    }
  }
};

export const EditAmountFoodAdmin = (id,editAmount) => {
  return async (dispatch, getState) => {
    
    const response = await fetch(`http://localhost:5000/Item/editFood/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify(editAmount)
    });
    const data = await response.json();
    
    if (data.editAmount) {
      dispatch({ type: "EDITAMOUNT_SUCCESS", payload: data });
    } else {
      dispatch({ type: "EDITAMOUNT_FAIL", payload: data });
    }
  }
};