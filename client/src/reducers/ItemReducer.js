const initialState = {
  Customer: null,
  Food: null,
  Admin: null,
  Errormsg : null
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

      return { ...state, Food: {FoodsList:foods} };
    case "ADDFOOD_FAIL" :
      return {...state,Errormsg:action.payload.errorMsg} 
    default:
      return state;
  }
}
