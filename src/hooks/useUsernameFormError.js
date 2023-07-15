import { useState } from "react";

function useUsernameFormError(initialUsernameValue) {
  const regExp = /^[0-9a-zа-я_]+$/i;

  const [usernameValue, setUsernameValue] = useState(initialUsernameValue);
  const [usernameError, seUserNameError] = useState("");

  const validateUsername = () => {
    if (!regExp.test(usernameValue)) {
      seUserNameError("Username must consist only of letters, numbers and _.");
      return false;
    } else if (usernameValue.length < 6 || !usernameValue) {
      seUserNameError("Username must be no shorter than 6 characters");
      return false;
    } else {
      seUserNameError("");
      return true;
    }
  };

  return [usernameValue, setUsernameValue, validateUsername, usernameError];
}

export { useUsernameFormError };
