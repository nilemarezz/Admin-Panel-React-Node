const initialState = {
  Customer: null,
  Food: null,
  Admin: null,
  Errormsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GETITEM_SUCCESS":
      return {
        Customer: action.payload.Customer,
        Food: action.payload.Food,
        Admin: action.payload.Admin
      };
    case "ADDFOOD_SUCCESS":
      const foods = state.Food.FoodsList;
      foods.push(action.payload.newFood);

      return { ...state, Food: { FoodsList: foods } };
    case "ADDFOOD_FAIL":
      return { ...state, Errormsg: action.payload.errorMsg };
    case "DELETEFOOD_SUCCESS":
      let food = state.Food.FoodsList;
      food = food.filter(item => item._id !== action.payload.deleteFood._id);
      return { ...state, Food: { FoodsList: food } };
    case "DELETEFOOD_FAIL":
      return { ...state, Errormsg: action.payload.errorMsg }; 
    case "EDITAMOUNT_SUCCESS":
      return state
    case "EDITAMOUNT_FAIL":
      return { ...state, Errormsg: action.payload.errorMsg };
    default:
      return state;
  }
}
