import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase/config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "@firebase/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "chekcing",
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      )
        .then((userCredential) => {
          state.user = userCredential.user;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    loginWithGoogle: (state) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          state.user = result.user;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout: (state) => {
      signOut(auth)
        .then(() => {
          state.user = null;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});

export const { login, loginWithGoogle, logout } = authSlice.actions;
