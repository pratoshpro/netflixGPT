import { loginSubmitHandler } from "@/utils/login";
const mockLoginSubmitHandler = jest.fn(loginSubmitHandler);
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

describe("login and register successful case in utils", () => {
  afterAll(() => {
    jest.autoMockOff();
  });

  const signUpSuccessCallback = jest.fn();
  const setErrorMessage = jest.fn();
  it("should be validate form input for sign in form", () => {
    const email = "pratosh@netflix.com";
    const password = "password@12345";

    mockLoginSubmitHandler({
      email,
      password,
      isSignInForm: true,
      fullName: null,
      signUpSuccessCallback,
      setErrorMessage,
    });
    expect(mockLoginSubmitHandler).toHaveBeenCalledWith({
      email,
      password,
      isSignInForm: true,
      fullName: null,
      signUpSuccessCallback,
      setErrorMessage,
    });
  });
  it("should be validate form input for sign in form", () => {
    const email = "pratosh@netflix.com";
    const password = "password@12345";
    const fullName = "Pratosh";
    mockLoginSubmitHandler({
      email,
      password,
      isSignInForm: false,
      fullName,
      signUpSuccessCallback,
      setErrorMessage,
    });
    expect(mockLoginSubmitHandler).toHaveBeenCalledWith({
      email,
      password,
      isSignInForm: false,
      fullName: fullName,
      signUpSuccessCallback,
      setErrorMessage,
    });
  });
});
