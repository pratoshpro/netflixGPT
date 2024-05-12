import { checkLoginValidation } from "@/utils/validate";

describe("Validate Utils", () => {
  it("should be validate form input", () => {
    let email = "pratosh@netflix.com";
    let password = "password@12345";
    let result = checkLoginValidation(email, password, null);
    expect(result).toBe(null);
  });

  it("should be validate form input email ", () => {
    let email = "pratosh@leena";
    let password = "password@12345";
    let result = checkLoginValidation(email, password, null);
    expect(result).toBe("Enter valid email address");
  });
  it("should be validate form input password ", () => {
    let email = "pratosh@netflix.com";
    let password = "password";
    let result = checkLoginValidation(email, password, null);
    expect(result).toBe("Enter valid password");
  });
  it("should be validate form user full name ", () => {
    let email = "pratosh@netflix.com";
    let password = "password@123";

    let result = checkLoginValidation(email, password, "");
    expect(result).toBe("Enter full name");
  });
});
