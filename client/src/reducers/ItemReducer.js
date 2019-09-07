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

    case "DELETEFOOD_SUCCESS":
      let food = state.Food.FoodsList;
      food = food.filter(item => item._id !== action.payload.deleteFood._id);
      return { ...state, Food: { FoodsList: food } };

    case "EDITAMOUNT_SUCCESS":
      return state;

    case "AddADMIN_SUCCESS":
      const admin = state.Admin.AdminList;
      admin.push(action.payload.newAdmin);

      return { ...state, Admin: { AdminList: admin } };
    case "DELETEADMIN_SUCCESS":
      let admins = state.Admin.AdminList;
      admins = admins.filter(
        item => item._id !== action.payload.DeleteAdmin._id
      );
      return { ...state, Admin: { AdminList: admins } };
    case "DELETECUSTOMER_SUCCESS":
      let customer = state.Customer.CustomerList;
      customer = customer.filter(
        item => item._id !== action.payload.deleteCustomer._id
      );
      return { ...state, Customer: { CustomerList: customer } };
    case "AddADMIN_FAIL":
    case "ADDFOOD_FAIL":
    case "DELETEFOOD_FAIL":
    case "EDITAMOUNT_FAIL":
    case "DELETECUSTOMER_FAIL":
      return { ...state, Errormsg: action.payload.errorMsg };
    default:
      return state;
  }
}
