import { useState } from "react";

function useValidation(initialValue, func) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = () => {
    setError(func(value));
    return func(value)
  };

  return [value, setValue, validate, error, setError];
}

export default useValidation;
