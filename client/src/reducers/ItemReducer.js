const initialState = {
  Customer: null,
  Food: null,
  Admin: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GETITEM_SUCCESS":
      return { Customer: action.payload.Customer, Food: action.payload.Food , Admin: action.payload.Admin};
   

    default:
      return state;
  }
}
