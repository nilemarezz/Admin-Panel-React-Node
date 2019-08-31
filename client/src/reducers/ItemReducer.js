const initialState = {
  Customer: null,
  Food: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GETITEM_SUCCESS":
      return {Customer: action.payload.Customer , Food : action.payload.Food}
    case "GETITEM_FAIL":
      return

    default:
      return state;
  }
}
