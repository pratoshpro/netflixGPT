import { Dispatch, SetStateAction } from "react";
import { checkLoginValidation } from "./validate";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { USER_AVATAR } from "./constants";
import { TUser } from "./type";

type FORM_SUBMIT = {
  email: string;
  password: string;
  fullName: string | null;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  isSignInForm?: boolean;
  signUpSuccessCallback: Dispatch<TUser>;
};
export const loginSubmitHandler = ({
  email,
  password,
  fullName,
  setErrorMessage,
  isSignInForm,
  signUpSuccessCallback,
}: FORM_SUBMIT) => {
  const status = checkLoginValidation(email, password, fullName);
  setErrorMessage(status);
  if (status) return;
  if (isSignInForm) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}=${errorMessage}`);
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: USER_AVATAR,
          }).then(() => {
            if (
              auth.currentUser?.uid &&
              auth.currentUser?.email &&
              auth.currentUser?.displayName &&
              auth.currentUser?.photoURL
            ) {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              signUpSuccessCallback({ uid, email, displayName, photoURL });
            }
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}=${errorMessage}`);
      });
  }
};
