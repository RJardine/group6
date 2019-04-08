import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import bookingReducer from "./bookingReducer";
import contactUsReducer from "./contactUsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  bookings: bookingReducer,
  contactus: contactUsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
