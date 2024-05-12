export const checkLoginValidation = (
  email: string,
  password: string,
  fullName?: string | null
) => {
  const isEmailValid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (fullName !== null && !fullName?.length) return "Enter full name";
  if (!isEmailValid) return "Enter valid email address";
  if (!isPasswordValid) return "Enter valid password";
  return null;
};
