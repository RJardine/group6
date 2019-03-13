export const viewBookings = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser.uid;
    const viewArea = document.querySelector("#Bookings-textArea");

    firestore
      .collection("bookings")
      .doc(user)
      .get()

      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          viewArea.value =
            "Date: " +
            doc.data().date +
            "\n" +
            "Type: " +
            doc.data().type +
            "\n" +
            "Description: " +
            doc.data().description +
            "\n" +
            "Location: " +
            doc.data().location;
        } else {
          //// doc.data() will be undefined in this case
          console.log("No such document!");
        }
        dispatch({ type: "VIEW_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "VIEW_ERROR", err });
      });
  };
};
