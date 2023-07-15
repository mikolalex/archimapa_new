import { useState } from "react";

function usePasswordFormError(initialPasswordValue, initialPasswordCheckValue) {
  const [passwordValue, setPasswordValue] = useState(initialPasswordValue);
  const [passwordCheckValue, setPasswordCheckValue] = useState(
    initialPasswordCheckValue
  );
  const [passwordError, setPasswordError] = useState(initialPasswordCheckValue);

  const validatePassword = () => {
    if (passwordValue.length < 6 || !passwordValue) {
      setPasswordError("Password must be no shorter than 6 characters");
      return false;
    } else if (passwordValue !== passwordCheckValue) {
      setPasswordError("Passwords do not match");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  return [
    passwordValue,
    setPasswordValue,
    passwordCheckValue,
    setPasswordCheckValue,
    validatePassword,
    passwordError,
  ];
}

export { usePasswordFormError };
