const initState = {};

const contactUsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_SUCCESS":
      console.log("submit message success");
      return state;
    case "SUBMIT_ERROR":
      console.log("submit message error");
      return state;
    default:
      return state;
  }
};

export default contactUsReducer;
