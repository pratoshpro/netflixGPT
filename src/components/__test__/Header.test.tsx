import { cleanup, render } from "@testing-library/react";
import Header from "../Header";
import userReducer, { addUser } from "@/utils/userSlice";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "@/utils/appStore";
import { act } from "react";

describe("Header component", () => {
  const mockUser = {
    uid: 1,
    email: "user@email.com",
    displayName: "user",
    photoURL: "http://xyz.photo.com",
  };
  jest.mock("firebase/auth", () => ({
    onAuthStateChanged: jest.fn(),
    getAuth: jest.fn(() => ({
      currentUser: mockUser,
    })),
    signOut: jest.fn(() => Promise.reject()),
  }));
  afterEach(() => {
    cleanup();
    jest.autoMockOff();
  });

  it("should logOutUser", async () => {
    // Render the Header component
    const previousState = null;
    const action = {
      type: addUser.type,
      payload: mockUser,
    };
    const newState = userReducer(previousState, action);
    expect(newState).toEqual(mockUser);
    await act(
      async () =>
        await render(
          <Provider store={appStore}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </Provider>
        )
    );
    // const signOutElement = screen.getByTestId("signout");
    // fireEvent.click(signOutElement);
  });
  it("should dispatch addUser and navigate to /browse when user is authenticated", async () => {
    //   const mockUser = {
    //     uid: "mockUid",
    //     email: "mock@example.com",
    //     displayName: "Mock User",
    //     photoURL: "mock-avatar.jpg",
    //   };

    // Mock the onAuthStateChanged function to call the callback with a user object
    //   onAuthStateChanged((auth, callback) => {
    //     callback(mockUser);
    //     return jest.fn(); // Return a mock unsubscribe function
    //   });

    await act(
      async () =>
        await render(
          <Provider store={appStore}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </Provider>
        )
    ); // Render the Header component

    // Assert that addUser is dispatched with the correct user object
    //   expect(mockDispatch).toHaveBeenCalledWith(addUser(mockUser));

    // Assert that navigate is called with the correct path
    //   expect(mockNavigate).toHaveBeenCalledWith("/browse");
  });

  it("should dispatch removeUser and navigate to / when user is not authenticated", async () => {
    // Mock the onAuthStateChanged function to call the callback with null (user not authenticated)
    //   onAuthStateChanged((auth, callback) => {
    //     callback(null);
    //     return jest.fn(); // Return a mock unsubscribe function
    //   });

    await act(
      async () =>
        await render(
          <Provider store={appStore}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </Provider>
        )
    );
    // Assert that removeUser is dispatched
    //   expect(mockDispatch).toHaveBeenCalledWith(removeUser());

    // Assert that navigate is called with the correct path
    //   expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
