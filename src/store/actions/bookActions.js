import BookingList from "../../components/bookings/BookingList";

// import BookingSummary from "../../components/bookings/BookingSummary";
// import { Link } from "react-router-dom";
// import React from "react";

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

export const viewBookings = bookings => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("bookings")
      .where("authorId", "==", authorId)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
          BookingList();
        });
      })
      .then(() => {
        dispatch({ type: "VIEW_BOOKING_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "VIEW_BOOKING_ERROR" }, err);
      });
  };
};

/*export const viewBookings = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser.uid;
    const viewArea = document.querySelector("#Bookings-textArea");

    firestore
      .collection("bookings")
      // .where("authorId", "==", user)
      .get()
      .then(snapshot => {
        snapshot.docs
          .forEach(doc => {
            console.log(doc.data());
          })
          .then(() => {
            dispatch({ type: "VIEW_BOOKING_SUCCESS" });
          })
          .catch(err => {
            dispatch({ type: "VIEW_BOOKING_ERROR" }, err);
          });
      });
  };
};*/

//viewArea.value = doc.data();

//if (doc.data().userID === user) {
//console.log(doc.data().type);
//viewArea.value = doc.data().type;

/*console.log("Document data:", doc.data(), user);

          viewArea.value = doc.data();

/*viewArea.value = doc.data() = {
              bookings: [
                date = "",
                type = "",
                description = "",
                userID = ""
              ]
            };*/

/*"Date: " +
              doc.data().date +
              "\n" +
              "Type: " +
              doc.data().type +
              "\n" +
              "Description: " +
              doc.data().description +
              "\n" +
              "UID: " +
              doc.data().userID;
          //}
        });
      });

    /*View only one booking
    
    firestore
      .collection("bookings")
      .doc(user)
      .get()

      .then(doc => {

        

        
        if (doc.exists) {
          console.log("Document data:", doc.data(), user);
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
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        dispatch({ type: "VIEW_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "VIEW_ERROR", err });
      });
  };
};*/
