import userReducer, { addUser, removeUser } from "@/utils/userSlice";

describe("User Reducer", () => {
  it("should handle addUser action", () => {
    const previousState = null;
    const action = { type: addUser.type, payload: { name: "Pratosh" } };
    const newState = userReducer(previousState, action);
    expect(newState).toEqual({ name: "Pratosh" });
  });

  it("should handle removeUser action", () => {
    const previousState = null;
    const addAction = { type: addUser.type, payload: { name: "Pratosh" } };
    const newState = userReducer(previousState, addAction);
    expect(newState).toEqual({ name: "Pratosh" });

    const removeAction = { type: removeUser.type };
    const modifiedState = userReducer(previousState, removeAction);
    expect(modifiedState).toEqual(null);
  });
});
