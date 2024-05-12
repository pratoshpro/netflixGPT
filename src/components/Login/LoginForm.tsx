import { FormEvent, useRef, useState } from "react";
import { checkLoginValidation } from "../../utils/validate";

import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { TUser } from "@/utils/type";
import { loginSubmitHandler } from "@/utils/login";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const signUpSuccessCallback = ({
    uid,
    email,
    displayName,
    photoURL,
  }: TUser) => {
    dispatch(
      addUser({
        uid,
        email,
        displayName,
        photoURL,
      })
    );
  };
  const handleSubmit = () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const fullName = isSignInForm ? null : fullNameRef.current!.value;
    const status = checkLoginValidation(email, password, fullName);
    setErrorMessage(status);
    if (status) return;
    loginSubmitHandler({
      email,
      password,
      fullName,
      setErrorMessage,
      isSignInForm,
      signUpSuccessCallback,
    });
  };
  const formSubmit = (e: FormEvent) => e.preventDefault();
  return (
    <form
      noValidate
      onSubmit={formSubmit}
      className="flex gap-3 w-screen my-3 p-3 mt-36 md:gap-4 rounded-lg bg-opacity-70 bg-black from-black md:p-12 md:w-[450px] flex-col md:m-auto md:mt-60 text-white"
    >
      <h1 className="text-lg font-bold md:text-3xl mb-2">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm ? (
        <input
          type="text"
          name="fullName"
          className="p-2 rounded-md bg-slate-700 h-7 md:h-10 text-sm md:text-lg"
          placeholder="Full Name"
          ref={fullNameRef}
        />
      ) : null}
      <input
        type="email"
        name="email"
        className="p-2 rounded-md bg-slate-700 h-7 md:h-10 text-sm md:text-lg"
        placeholder="Email"
        ref={emailRef}
      />
      <input
        type="password"
        name="password"
        className="p-2 rounded-md bg-slate-700 h-7 md:h-10 text-sm md:text-lg"
        placeholder="Password"
        ref={passwordRef}
      />

      {errorMessage ? (
        <p
          className="text-red-500 text-sm md:text-lg"
          data-testid="errorMessage"
        >
          {errorMessage}
        </p>
      ) : null}

      <button
        className="px-4 py-2 bg-red-600 rounded-lg text-sm md:text-lg"
        onClick={handleSubmit}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      {isSignInForm ? (
        <p
          className="mt-4 text-sm md:text-lg"
          onClick={toggleForm}
          data-testid="signuptext"
        >
          New to Netflix?{" "}
          <span className="cursor-pointer font-bold">Sign Up now.</span>
        </p>
      ) : (
        <p
          className="mt-4 text-sm md:text-lg"
          onClick={toggleForm}
          data-testid="signintext"
        >
          Already member{" "}
          <span className="cursor-pointer font-bold">Sign In now.</span>
        </p>
      )}
    </form>
  );
};

export default LoginForm;
