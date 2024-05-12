import { useDispatch, useSelector } from "react-redux";
import LogoSVG from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { User, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ChangeEvent, useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {
  appConfigSelector,
  gptSelector,
  userSelector,
} from "../utils/selector";
import UserAvatar from "./UserAvatar";

import { onAuthStateChangedHandler } from "@/utils/header";
import { toggleGPTSearchView } from "@/utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "@/utils/constants";
import { changeLanguage } from "@/utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const { preferredLanguage } = useSelector(appConfigSelector);
  const { showGPTSearch } = useSelector(gptSelector);
  const redirectToBrowse = (user: User) => {
    const { uid, email, displayName, photoURL } = user;
    dispatch(
      addUser({
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL: photoURL,
      })
    );
    navigate("/browse");
  };
  const redirectToLogin = () => {
    dispatch(removeUser());
    navigate("/");
  };

  useEffect(() => {
    onAuthStateChangedHandler({
      redirectToBrowse,
      redirectToLogin,
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/error");
    });
  };
  const toggleGPTView = () => {
    dispatch(toggleGPTSearchView());
  };
  const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e?.target?.value));
  };
  return (
    <div className="w-screen absolute px-4 md:px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col items-center gap-4 justify-between md:flex-row">
      <img src={LogoSVG} className="w-24 mx-auto md:m-0 md:w-40" />
      {user?.uid ? (
        <div className="flex w-full md:w-auto items-center gap-2 cursor-pointer justify-between">
          {showGPTSearch ? (
            <select
              onChange={onLanguageChange}
              className="rounded-lg bg-blue-500 text-white px-4 py-2 flex items-center"
              value={preferredLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          ) : null}
          <button
            className="rounded-lg bg-gray-800 text-white px-4 py-2 flex items-center"
            onClick={toggleGPTView}
          >
            {!showGPTSearch ? "🔍 Search" : "Home"}
          </button>
          {user?.photoURL ? (
            <img
              title={user?.displayName}
              className="hidden md:block w-[40px] rounded-lg"
              src={user?.photoURL}
              alt="userpic"
            />
          ) : (
            <UserAvatar name={user.displayName} />
          )}
          <span
            className="font-bold text-white"
            onClick={handleSignOut}
            data-testid="signout"
          >
            Sign out
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
