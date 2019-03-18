const initState = {};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_BOOKING_SUCCESS":
      console.log("create booking success");
      return state;
    case "CREATE_BOOKING_ERROR":
      console.log("create booking error");
      return state;
    case "VIEW_BOOKING_SUCCESS":
      console.log("view booking success");
      return state;
    case "VIEW_BOOKING_ERROR":
      console.log("view booking error");
      return state;
    default:
      return state;
  }
};

export default bookingReducer;
