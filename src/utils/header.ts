import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const onAuthStateChangedHandler = ({
  redirectToBrowse,
  redirectToLogin,
}: {
  redirectToBrowse: (user: User) => void;
  redirectToLogin: () => void;
}) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      redirectToBrowse(user);
    } else {
      redirectToLogin();
    }
  });
};
