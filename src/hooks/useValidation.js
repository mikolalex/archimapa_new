import { useState } from "react";

function useValidation(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [value2, setValue2] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = (condition, message) => {
    if (condition) {
      setError(message);
      return true;
    } else {
      setError("");
      return false;
    }
  };

  return [value, setValue, validate, error, value2, setValue2];
}

export default useValidation;
