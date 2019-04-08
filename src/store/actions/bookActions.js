export const createBooking = booking => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("bookings")
      .add({
        ...booking,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_BOOKING_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BOOKING_ERROR" }, err);
      });
  };
};
