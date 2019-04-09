export const submitMessage = contactus => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;

    firestore
      .collection("contactus")
      .add({
        ...contactus,
        // authorFirstName: profile.name,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "SUBMIT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SUBMIT_ERROR" }, err);
      });
  };
};
