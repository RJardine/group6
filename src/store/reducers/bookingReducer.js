const initState = {
  bookError: null
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case "VIEW_SUCCESS":
      console.log("view booking success");
      return {
        ...state,
        bookError: null
      };

    case "VIEW_ERROR":
      console.log("view booking error");
      return {
        ...state,
        bookError: action.err.message
      };

    default:
      return state;
  }
};

export default bookingReducer;
