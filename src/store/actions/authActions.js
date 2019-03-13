export const login = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const register = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phone: newUser.phone,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};

export const deleteU = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser.uid;

    firestore
      .collection("users")
      .doc(user)
      .delete();

    firebase
      .auth()
      .currentUser.delete()
      .then(() => {
        dispatch({ type: "DELETE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_ERROR", err });
      });
  };
};

export const updateDetails = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser.uid;
    const editModal = document.querySelector("#editDetails-form");

    firestore
      .collection("users")
      .doc(user)
      .update({
        firstName: editModal["firstName-modal"].value,
        lastName: editModal["lastName-modal"].value,
        email: editModal["email-modal"].value,
        phone: editModal["phone-modal"].value
        /*initials:
          editModal["firstName-modal"][0].value +
          editModal["lastName-modal"][0].value*/
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_ERROR", err });
      });
  };
};
