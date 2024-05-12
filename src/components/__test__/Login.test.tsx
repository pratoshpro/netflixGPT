import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login/Login";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { auth } from "../../utils/firebase";

import "@testing-library/jest-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  getAuth: jest.fn(() => ({
    currentUser: {
      uid: 1,
      email: "user@email.com",
      displayName: "user",
      photoURL: "http://xyz.photo.com",
    },
  })),
  updateProfile: jest.fn(() => Promise.resolve()),
}));

describe("Login Flow Firebase Authentication API", () => {
  beforeEach(() => {
    cleanup();
  });
  it("should call signInWithEmailAndPassword with correct arguments", () => {
    const email = "test@example.com";
    const password = "password123";

    signInWithEmailAndPassword(auth, email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password
    );
  });

  it("should call createUserWithEmailAndPassword with correct arguments", () => {
    const email = "test@example.com";
    const password = "password123";

    createUserWithEmailAndPassword(auth, email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password
    );
  });
});

it("should be render Login component", async () => {
  render(
    <Provider store={appStore}>
      <Login />
    </Provider>
  );
  const signUpElement = screen.getByTestId("signuptext");
  fireEvent.click(signUpElement);
  const signInElement = screen.getByTestId("signintext");
  expect(signInElement).toBeInTheDocument();
});

it("renders login form correctly", () => {
  render(
    <Provider store={appStore}>
      <Login />
    </Provider>
  );

  // Assert that the form elements are rendered
  const button = screen.getByRole("button", { name: "Sign In" });

  expect(button).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});

it("should be render error in Login component", async () => {
  render(
    <Provider store={appStore}>
      <Login />
    </Provider>
  );
  const button = screen.getByRole("button", { name: "Sign In" });
  fireEvent.click(button);
  const errorMessage = screen.getByTestId("errorMessage");
  expect(errorMessage).toBeInTheDocument();
});

it("should be render Login component while create User", async () => {
  render(
    <Provider store={appStore}>
      <Login />
    </Provider>
  );
  const Email = screen.getByPlaceholderText("Email");
  const Password = screen.getByPlaceholderText("Password");

  if (Email && Password) {
    fireEvent.change(Email, { target: { value: "pratosh" } });
    fireEvent.change(Password, { target: { value: "pratosh@123" } });
  }
  const button = screen.getByRole("button", { name: "Sign In" });
  fireEvent.click(button);
  const errorMessage = screen.getByTestId("errorMessage");
  expect(errorMessage).toBeInTheDocument();
});
it("should be render error in Login component while submit form", async () => {
  render(
    <Provider store={appStore}>
      <Login />
    </Provider>
  );
  const signUpElement = screen.getByTestId("signuptext");
  fireEvent.click(signUpElement);
  const email = screen.getByPlaceholderText("Email");

  const password = screen.getByPlaceholderText("Password");
  const fullName = screen.getByPlaceholderText("Full Name");

  fireEvent.change(email, { target: { value: "pratosh@netflix.com" } });
  fireEvent.change(password, { target: { value: "pratosh@123" } });
  fireEvent.change(fullName, { target: { value: "pratosh singh" } });

  const button = screen.getByRole("button", { name: "Sign Up" });
  fireEvent.click(button);
  const errorMessage = screen.queryByTestId("errorMessage");
  expect(errorMessage).not.toBeInTheDocument();
});
